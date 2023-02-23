---
layout: page
title: Talks
published: true
---

<div class="page" markdown="1">

<img
    class="me"
    alt="{{ author.name }}"
    src="{{ site.author.photo | relative_url }}"
    srcset="{{ site.author.photo2x | relative_url }} 2x"
/>

# Keynotes

{% for presentation in site.data.peer2023.presentations %}
{% assign presentationid = presentation[0] %}
{% assign presentationinfo = presentation[1] %}

{% assign presenterinfo = site.data.peer2023.people[presentationinfo.presenter] %}

{% if presenterinfo.role == "keynote" %}

<b>{{ presentationinfo.title }}</b>
{{ presenterinfo.name }}
<i>{{ presenterinfo.department }}</i>
<i>{{ presenterinfo.university }}</i>
<br/>
{{ presentationinfo.abstract }}
<br/>

{% endif %}
{% endfor %}

# Talks

{% for presentation in site.data.peer2023.presentations %}
{% assign presentationid = presentation[0] %}
{% assign presentationinfo = presentation[1] %}

{% assign presenterinfo = site.data.peer2023.people[presentationinfo.presenter] %}

{% if presenterinfo.role == "talk" %}

<center><b>{{ presentationinfo.title }}</b></center>
<center>{{ presenterinfo.name }}</center>
<center><i>{{ presenterinfo.department }}</i></center>
<center><i>{{ presenterinfo.university }}</i></center>

{% if presentationinfo.abstract %}
<br/>
{{ presentationinfo.abstract }}
{% endif %}
<br/>
{% endif %}
{% endfor %}

</div>