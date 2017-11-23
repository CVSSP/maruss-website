---
layout: page
permalink: /publications/
title: Publications
---

{% assign publications = site.publications | sort  %}

{% for pub in publications %}

  <a href="{{ pub.url }}" >{{ pub.title }}</a>

{% endfor %}
