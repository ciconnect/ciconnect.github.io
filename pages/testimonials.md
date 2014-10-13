---
layout: default
title: Testimonials
permalink: /testimonials/
---

<div class="testimonials-page">
  <h2>Testimonials</h2>
  {% for item in site.data.testimonials %}
  <ul>
    <li>
      {% if item.svg %}
        <object data="/images/logos/{{ item.svg }}" type="image/svg+xml"></object>
      {% else %}
        <img src="/images/logos/{{ item.logo }}" />
      {% endif %}
    </li>
    <li>
      <h4>{{ item.person }}</h4>
    </li>
    <li><h5>{{ item.position}} at {{ item.company }}.</h5></li>
    <li><blockquote>{{ item.quote }}</blockquote></li>
  </ul>
  {% endfor %}
</div>