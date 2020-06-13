---
layout: default
title: About
permalink: /about
lang: fr
alternate_lang_1: de
alternate_1: /de/about
---
# About page

This page tells you a little bit about me.
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
