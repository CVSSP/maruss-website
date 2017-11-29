---
layout: page
permalink: /publications/
title: Publications
menu_order: 4
---

{% assign group = site.query_by_this_bibtex_keyword %}

<div class='publications'>
{% if group == blank %}
    {% bibliography -g year %}
{% else %}
    {% bibliography --query @*[keywords="{{ group }}"] -g year %}
{% endif %}
</div>
