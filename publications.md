---
layout: page
permalink: /publications/
title: Publications
menu_order: 4
---

<div class='publications'>
{% assign group = site.query_by_this_bibtex_keyword %}

{% if group == blank %}
    {% bibliography -g year %}
{% else %}
    {% bibliography --query @*[keywords="{{ group }}"] -g year %}
{% endif %}
</div>
