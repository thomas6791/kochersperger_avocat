---
layout: default
title: About
permalink: /about
lang: de
alternate_lang_1: fr
alternate_1: /fr/about
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
