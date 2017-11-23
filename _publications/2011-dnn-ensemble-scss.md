---
layout: page
title:  "Single Channel Audio Source Separation using Deep Neural Network Ensembles"
year: 1990
---

Abstract
========

Deep neural networks (DNNs) are often used to tackle the single channel source separation (SCSS) problem by predicting time-frequency masks. The predicted masks are then used to separate the sources from the mixed signal. Different types of masks produce separated sources with different levels of distortion and interference. Some types of masks produce separated sources with low distortion, while other masks produce low interference between the separated sources. In this paper, a combination of different DNNs' predictions (masks) is used for SCSS to achieve better quality of the separated sources than using each DNN individually. We train four different DNNs by minimizing four different cost functions to predict four different masks. The first and second DNNs are trained to approximate reference binary and soft masks. The third DNN is trained to predict a mask from the reference sources directly. The last DNN is trained similarly to the third DNN but with an additional discriminative constraint to maximize the differences between the estimated sources. Our experimental results show that combining the predictions of different DNNs achieves separated sources with better quality than using each DNN individually.


Implementation
==============
[Download (beta)][code]
The software is distributed under BSD license. If you use it, please cite:

E. M. Grais, G. Roma, A. J.R. Simpson, M. Plumbley, Single-Channel Audio Source Separation Using Deep Neural Network Ensembles. 140th AES Convention. Paris, 2016.


[code]: {{ site.url }}/download/dnnensemblescss.tar.gz

