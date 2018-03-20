---
---

## Evaluation Results

We extracted the singing-voice (vocals) from 46 different rock and pop songs
which were used for the evaluation stage of the music separation challenge of
[SiSEC 2016](http://sisec17.audiolabs-erlangen.de/#/about). The performance of
this system was assessed using the [BSS Eval
toolkit](http://bass-db.gforge.inria.fr/bss_eval/). For comparison, we applied BSS Eval to the
audio files submitted by participants of the SiSEC 2016 challenge (note that these values
differ from those found on the [results
page](http://sisec17.audiolabs-erlangen.de/#/results/1/4/2) of the SiSEC MUS
site, as we did not use the framewise method). You can download the
vocal separation performance measures as a [csv file]({{ site.url }}{{ site.baseurl }}/resources/Grais_2018_vocal_results.csv), where our proposed method is named "MRCAE".

## Audio Examples

The following examples are provided to show some of the best and worst of the
estimated vocals and estimated accompaniment from the SiSEC 2016 dataset. The
accompaniment was estimated by subtracting the extracted vocal from the original
mixture.  Source-to-distortion ratios (SDR; in decibels) refer to those measured
on the singing voice over the entire audio signal, with the original vocals and
accompaniment used as ground truth. Our average SDR across the 46 songs was 4.25
dB, with a standard deviation of 1.5 dB.

{% include soundboard.html config = site.data.Grais_2018 %}
