---
layout: default
title: About
permalink: /about
lang: de
---
# About page

DE This page tells you a little bit about me.
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
