---
layout: page
title:  "Remixing musical audio on the web using source separation"
---

Abstract
========

Research in audio source separation has progressed a long way, producing systems that are able to approximate the component signals of sound mixtures. In recent years, many efforts have focused on learning time-frequency masks that can be used to filter a monophonic signal in the frequency domain. Using current web audio technologies, time-frequency masking can be implemented in a web browser in real time. This allows applying source separation techniques to arbitrary audio streams, such as internet radios, depending on cross-domain security configurations. While producing good quality separated audio from monophonic music mixtures is still challenging, current methods can be applied to remixing scenarios, where part of the signal is emphasized or deemphasized. This paper describes a system for remixing musical audio on the web by applying time-frequency masks estimated using deep neural networks. Our example prototype, implemented in client-side Javascript, provides reasonable quality results for small modifications.


Implementation
==============
Check the online [demo][demo]. Code available on [github][repo]

The software is distributed under BSD license. If you use it, please cite:

Roma, G, Simpson, AJR, Grais, EM and Plumbley, M (2016) Remixing musical audio on the web using source separation In: 2nd Web Audio Conference (WAC), 2016-04-04 - 2016-04-06, Atlanta, Georgia..


[repo]: https://github.com/g-roma/twowaymixer
[demo]: {{ site.url }}/twowaymixer_demo
[aRXIV]: http://arxiv.org/abs/1504.04658
