---
layout: publication

title:  "Deep Karaoke: Extracting Vocals from Musical Mixtures Using a Convolutional Deep Neural Network"
authors: Simpson, A.J.R., Roma, G., Plumbley, M.D.
proceedings: Proceedings of the International Conference on Latent Variable Analysis and Signal Separation (LVA/ICA)
editors: Vincent E., Yeredor A., Koldovský Z., Tichavský P. 
location: Liberec, Czech Republic
year: 2015
pages: 429-436
volume: 9237
doi: https://doi.org/10.1007/978-3-319-22482-4_50
paperlink: https://arxiv.org/abs/1504.04658

abstract: >
    Identification and extraction of singing voice from within musical mixtures is a
    key challenge in source separation and machine audition. Recently, deep neural
    networks (DNN) have been used to estimate 'ideal' binary masks for carefully
    controlled cocktail party speech separation problems. However, it is not yet
    known whether these methods are capable of generalizing to the discrimination of
    voice and non-voice in the context of musical mixtures. Here, we trained a
    convolutional DNN (of around a billion parameters) to provide probabilistic
    estimates of the ideal binary mask for separation of vocal sounds from
    real-world musical mixtures. We contrast our DNN results with more traditional
    linear methods. Our approach may be useful for automatic removal of vocal sounds
    from musical mixtures for 'karaoke' type applications.
---

# Implementation

Source code for the experiments described in this article is available for
download. The code runs on Matlab 2014. The dataset used for evaluation is a
subset of [medleydb][medleydb]. The code includes a json file with the index of
the subset, you still need to obtain a copy of the dataset from the original
authors.

[Download (beta)][code]

The software is distributed under BSD license. If you use it, please cite us!

# References

R. B. Palm, "Prediction as a candidate for learning deep hierarchical models of data". Master thesis. 2012.

R. Bittner, J. Salamon, M. Tierney, M. Mauch, C. Cannam and J. P. Bello, "MedleyDB: A Multitrack Dataset for Annotation-Intensive MIR Research", in 15th International Society for Music Information Retrieval Conference, Taipei, Taiwan, Oct. 2014.

[medleydb]: http://medleydb.weebly.com
[code]: {{ site.url }}/download/deep_karaoke_code_1.0beta.zip
[aRXIV]: http://arxiv.org/abs/1504.04658
