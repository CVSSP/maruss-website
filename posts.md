---
layout: page
permalink: /posts/
title: Posts
menu_order: 5
---

{% for post in site.posts %}
{% assign currentdate = post.date | date: "%Y" %}
{% if currentdate != date %}
{% unless forloop.first %}</ul>{% endunless %}
<h2 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h2>
<ul>
{% assign date = currentdate %}
{% endif %}
<li><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
<span class="post-meta">({{ post.date | date: "%b %-d, %Y" }})</span>
</li>
{% if forloop.last %}</ul>{% endif %}
{% endfor %}
