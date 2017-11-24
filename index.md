---
layout: default
title: Home
menu: true
---

MARuSS is an EPSRC-funded research project (EP/L027119/1) that aims at
developing a new approach to high quality audio repurposing, based on high
quality musical audio source separation (see <a href="about">about</a>).

{% assign posts = site.posts | sort:"date"  %}

{% if posts.size > 0 %}
# News
<ul class="post-list">

{% for post in posts %}
<li>
<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
<h2>
<a class="post-link" href="{{ page.url | prepend: site.baseurl }}">{{ post.title }}</a>
</h2>
</li>
{% endfor %}
</ul>
{% endif %}

# Latest publications

{% bibliography --max 3 %}
