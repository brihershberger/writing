---
title: Brian Hershberger \ Writing
layout: base.njk
---

## Writing

{% for post in collections.writing %}
  <p><a href="{{ post.url }}">{{ post.data.title }}</a></p>
{% endfor %} 