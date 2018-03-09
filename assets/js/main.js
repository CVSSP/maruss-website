function fromAToBArray (a, b) {
  if (b <= a) { b = a + 1 }

  var n = b - a
  var array = new Array(n)
  for (var i = 0; i < n; ++i) { array[i] = a + i }

  return array
}

function arrayFilledWith (value, size) {
  var array = new Array(size)
  for (var i = 0; i < size; ++i) { array[i] = value }
  return array
}

function randomNumber (min, max, shouldRound) {
  var val = Math.random()
  var range = max - min
  val *= range
  val += min

  if (shouldRound) { val = Math.floor(val) }
  return val
}

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 * From: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle (a) {
  var j, x, i
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i)
    x = a[i - 1]
    a[i - 1] = a[j]
    a[j] = x
  }
}

function selectMaximum (a, b) {
  if (a > b) { return a } else { return b }
}

function selectMinimum (a, b) {
  if (a < b) { return a } else { return b }
}

function newSortedArray (array) {
  var newArray = array.slice()
  return newArray.sort(function (a, b) { return a - b })
}

function indicesNeededToSortArray (array) {
  var newArray = fromAToBArray(0, array.length)
  return newArray.sort(function (a, b) {
    return array[a] < array[b] ? -1 : array[a] > array[b] ? 1 : 0
  })
}
// https://stackoverflow.com/questions/10716986/swap-2-html-elements-and-preserve-event-listeners-on-them
function swapElements (obj1, obj2) {
    // create marker element and insert it where obj1 is
  var temp = document.createElement('div')
  obj1.parentNode.insertBefore(temp, obj1)

    // move obj1 to right before obj2
  obj2.parentNode.insertBefore(obj1, obj2)

    // move obj2 to right before where obj1 used to be
  temp.parentNode.insertBefore(obj2, temp)

    // remove temporary marker node
  temp.parentNode.removeChild(temp)
}

/*
 * AudioLoader
 */

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();

function AudioLoader (urlList, continuousPlayback, loopPlayback) {
  this.urlList = urlList
  this.buffers = arrayFilledWith(null, urlList.length)

  this.gainNodes = [audioContext.createGain(), audioContext.createGain()]
  this.gainNodeIndex = 0

  for (var i = 0; i < 2; ++i) {
    this.gainNodes[i].connect(audioContext.destination)
    this.gainNodes[i].gain.value = 0.0
  }

  this.startedPlayingAtTime = null
  this.fadeTime = 0.1
  this.currentIndex = null
  this.onsetTime = 0
  this.continuousPlayback = continuousPlayback
  this.loopPlayback = loopPlayback
  this.hasPlayed = []
  this.allOk = false
}

AudioLoader.prototype.loadBuffer = function (url, index, callBack) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest()
  request.responseType = 'arraybuffer'
  request.open('GET', url, true)

  var loader = this

  request.onload = function () {
        // Asynchronously decode the audio file data in request.response
    audioContext.decodeAudioData(request.response,
            function (buffer) {
              if (!buffer) {
                window.alert('error decoding file data: ' + url)
                return
              }

              loader.buffers[index] = buffer
              loader.checkBuffers(callBack)
            },

            function (error) {
              console.error('decodeAudioData error', error)
            }

        )
  }

  request.send()

  this.hasPlayed.push(false)
}

AudioLoader.prototype.checkBuffers = function (callBack) {
  this.allOk = true
  for (var i = 0; i < this.buffers.length; ++i) {
    if (this.buffers[i] == null) { this.allOk = false }
  }

  if (this.allOk) {
    $('.spinner').hide()
    if (typeof callBack === 'function') { callBack() }
  }
}

AudioLoader.prototype.load = function (callBack) {
  $('.spinner').show()

  this.allOk = false
  for (var i = 0; i < this.urlList.length; ++i) { this.loadBuffer(this.urlList[i], i, callBack) }

  this.timerStarted = false
}

AudioLoader.prototype.play = function (index) {
  if ((index !== this.currentIndex) && this.allOk) {
    this.switchStop()

        // get an AudioBufferSourceNode for playing our buffer
    this.source = audioContext.createBufferSource()

        // buffer config
    var buf = this.buffers[index]
    this.source.buffer = buf
    this.source.loop = this.loopPlayback
    this.source.loopStart = false

    if (!this.loopPlayback) {
      this.source.onended = function () {
        if (this.currentIndex === index) { this.currentIndex = null }
      }.bind(this)
    }

        // ramping
    var currentGainNode = this.gainNodes[this.gainNodeIndex]
    this.source.connect(currentGainNode)

        // Playhead calculation (but not sample accurate)
    if (this.continuousPlayback) {
      if (this.currentIndex == null) {
        this.onsetTime = 0
      } else {
        var prevBufDuration = this.buffers[this.currentIndex].duration
        this.onsetTime += (audioContext.currentTime - this.startedPlayingAtTime)

        if (this.onsetTime > prevBufDuration) { this.onsetTime = this.onsetTime % prevBufDuration }

        if (this.onsetTime > buf.duration) { this.onsetTime = 0 }
      }
    }

    this.hasPlayed[index] = true
    this.currentIndex = index
    this.startedPlayingAtTime = audioContext.currentTime

    this.startTimer()

    this.source.start(0, this.onsetTime)
    currentGainNode.gain.linearRampToValueAtTime(
            1.0, audioContext.currentTime + this.fadeTime)
  }
}

AudioLoader.prototype.startTimer = function () {
  if (!this.timerStarted) {
    this.startTime = audioContext.currentTime
    this.timerStarted = true
  }
}

AudioLoader.prototype.endTimer = function () {
  this.timerStarted = false
  return audioContext.currentTime - this.startTime
}

AudioLoader.prototype.switchStop = function () {
  this.stop(false)
}

AudioLoader.prototype.stop = function (resetStartPosition) {
  if (this.source) {
    var whenToStop = audioContext.currentTime + this.fadeTime

    var currentGainNode = this.gainNodes[this.gainNodeIndex]
    currentGainNode.gain.linearRampToValueAtTime(0.0,
                                                     whenToStop)

    this.source.stop(whenToStop)

    this.gainNodeIndex = (this.gainNodeIndex + 1) % 2
    this.source = null

    if (resetStartPosition) { this.currentIndex = null }
  }
}

AudioLoader.prototype.haveAllBuffersPlayed = function () {
  return this.hasPlayed.every(function (bool) { return bool })
}

function Soundboard (config) {
  this.config = config

  // Grab audio urls relative to site url
  var urls = []
  for (var i = 0; i < config.rows.length; ++i) {
    for (var j = 0; j < config.rows[i].sounds.length; ++j) {
      var thisSound = config.rows[i].sounds[j]
      urls.push(config.siteURL + '/' + thisSound.url)
    }
  }

  // Configure the audio loader
  this.loader = new AudioLoader(urls, config.continuous_playback, config.loop_playback)
  this.loader.load()

  // Configure play buttons:
  var play = function (i) {
    this.loader.play(i)
  }.bind(this)

  $('.soundboard-play').each(function (i) {
    $(this).on('click', function (i) {
      play(i)
    }.bind(null, i))
  })

  $('.soundboard-stop').on('click', this.loader.stop.bind(this.loader))

  $('.next').on('click', this.loader.stop.bind(this.loader))

  $('.back').on('click', function () {
    this.loader.stop()

    if (this.config.back_button_can_exit_test) { window.history.back() }
  }.bind(this))
}


