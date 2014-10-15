---
layout: default
title: Blog
permalink: /blog/
post_limit: 10
---

<div class="blog">

  <h2>Our blog</h2>

  {% include posts/index.html %}

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
