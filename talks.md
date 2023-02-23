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

<b>{{ presentationinfo.title }}</b><br/>
{{ presenterinfo.name }}<br/>
<i>{{ presenterinfo.department }}</i><br/>
<i>{{ presenterinfo.university }}</i><br/>

{% if presentationinfo.abstract %}
{{ presentationinfo.abstract }}<br/>
{% endif %}
<br/>

{% endif %}
{% endfor %}

# Talks

{% for presentation in site.data.peer2023.presentations %}
{% assign presentationid = presentation[0] %}
{% assign presentationinfo = presentation[1] %}

{% assign presenterinfo = site.data.peer2023.people[presentationinfo.presenter] %}

{% if presenterinfo.role == "talk" %}

<b>{{ presentationinfo.title }}</b><br/>
{{ presenterinfo.name }}<br/>
<i>{{ presenterinfo.department }}</i><br/>
<i>{{ presenterinfo.university }}</i><br/>

{% if presentationinfo.abstract %}
{{ presentationinfo.abstract }}<br/>
{% endif %}
<br/>
{% endif %}
{% endfor %}

</div>