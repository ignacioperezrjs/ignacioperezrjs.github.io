---
layout: default
permalink: /blog/
title: Blog
nav: false
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}
  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
  {% assign is_even = featured_posts.size | modulo: 2 %}
  <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
    {% for post in featured_posts %}
      <div class="col mb-4">
        <a href="{{ post.url | relative_url }}">
          <div class="card hoverable">
            <div class="row g-0">
              <div class="col-md-12">
                <div class="card-body">
                  <div class="float-right">
                    <i class="fa-solid fa-thumbtack fa-xs"></i>
                  </div>
                  <h3 class="card-title text-lowercase">{{ post.title }}</h3>
                  <p class="card-text">{{ post.description }}</p>
                  {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                  {% assign year = post.date | date: "%Y" %}
                  <p class="post-meta">
                    {{ read_time }} min read &nbsp; &middot; &nbsp;
                    <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                      <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
<hr>
{% endif %}

<!-- University Projects Section -->
{% assign university_projects = site.posts | where_exp: "post", "post.categories contains 'university-projects'" %}
{% if university_projects.size > 0 %}
<div class="university-projects">
  <h2 class="text-center mb-4">University Research & Projects</h2>
  <p class="text-muted text-center mb-5">A curated collection of my academic investigations, technical analyses, and engineering projects from university coursework and research initiatives.</p>

  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for project in university_projects limit:4 %}
    <div class="col">
      <div class="card h-100 hoverable">
        <div class="card-body">
          <h4 class="card-title">
            <i class="fa-solid fa-microscope me-2"></i>
            {{ project.title }}
          </h4>
          <div class="card-text">
            <p>{{ project.description }}</p>
            <div class="project-meta">
              <span class="badge bg-primary">
                <i class="fa-solid fa-calendar-days"></i>
                {{ project.date | date: "%b %Y" }}
              </span>
              {% if project.technologies %}
              <span class="badge bg-success ms-2">
                <i class="fa-solid fa-gears"></i>
                {{ project.technologies | join: ', ' }}
              </span>
              {% endif %}
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent">
          <a href="{{ project.url | relative_url }}" class="btn btn-outline-primary">
            Read Analysis
            <i class="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="text-center mt-5">
    <a href="{{ '/projects' | relative_url }}" class="btn btn-primary">
      View All Academic Projects
      <i class="fa-solid fa-graduation-cap ms-2"></i>
    </a>
  </div>
</div>
<hr>
{% endif %}

<!-- Electrical Engineering Analyses Section -->
{% assign engineering_analyses = site.posts | where_exp: "post", "post.categories contains 'engineering-analyses'" %}
{% if engineering_analyses.size > 0 %}
<div class="engineering-analyses">
  <h2 class="text-center mb-4">Electrical Engineering Analyses</h2>
  <p class="text-muted text-center mb-5">Insights and analyses of significant works in electrical engineering, including technical reviews, case studies, and innovative solutions.</p>

  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for analysis in engineering_analyses limit:4 %}
    <div class="col">
      <div class="card h-100 hoverable">
        <div class="card-body">
          <h4 class="card-title">
            <i class="fa-solid fa-lightbulb me-2"></i>
            {{ analysis.title }}
          </h4>
          <div class="card-text">
            <p>{{ analysis.description }}</p>
            <div class="analysis-meta">
              <span class="badge bg-primary">
                <i class="fa-solid fa-calendar-days"></i>
                {{ analysis.date | date: "%b %Y" }}
              </span>
              {% if analysis.keywords %}
              <span class="badge bg-info ms-2">
                <i class="fa-solid fa-key"></i>
                {{ analysis.keywords | join: ', ' }}
              </span>
              {% endif %}
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent">
          <a href="{{ analysis.url | relative_url }}" class="btn btn-outline-primary">
            Read Analysis
            <i class="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="text-center mt-5">
    <a href="{{ '/analyses' | relative_url }}" class="btn btn-primary">
      View All Analyses
      <i class="fa-solid fa-chart-line ms-2"></i>
    </a>
  </div>
</div>
<hr>
{% endif %}

<!-- Post List -->
<ul class="post-list">
  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  {% for post in postlist %}
  <li>
    <h3>
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    <p>{{ post.description }}</p>
    <p class="post-meta">
      {{ post.date | date: '%B %d, %Y' }}
    </p>
  </li>
  {% endfor %}
</ul>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}

</div>
