---
layout: page
permalink: /publications/
title: Publications
menu: true
---

{% assign group = site.primary_bibtex_group %}

<div class='publications'>
{% if group == blank %}
    {% bibliography -g year %}
{% else %}
    {% bibliography --query @*[keywords="{{ group }}"] -g year %}
{% endif %}
</div>
