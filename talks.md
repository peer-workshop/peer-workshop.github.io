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

<br/>

{% for presentation in site.data.peer2023.presentations %}
{% assign presentationid = presentation[0] %}
{% assign presentationinfo = presentation[1] %}

{% assign presenterinfo = site.data.peer2023.people[presentationinfo.presenter] %}

{% if presenterinfo.role == "keynote" %}


<center><b>{{ presentationinfo.title }}</b><a name="{{ presentationid }}"></a></center>
<center><a href="{{ presenterinfo.website }}">{{ presenterinfo.name }}</a></center>
<center><i>{{ presenterinfo.department }}</i></center>
<center><i>{{ presenterinfo.university }}</i></center>

{% if presentationinfo.abstract %}
{{ presentationinfo.abstract }}<br/>
{% endif %}
<br/>

{% endif %}
{% endfor %}

# Talks

<br/>

{% for presentation in site.data.peer2023.presentations %}
{% assign presentationid = presentation[0] %}
{% assign presentationinfo = presentation[1] %}

{% assign presenterinfo = site.data.peer2023.people[presentationinfo.presenter] %}

{% if presenterinfo.role == "talk" %}

<center><b>{{ presentationinfo.title }}</b></center>
<center><a href="{{ presenterinfo.website }}">{{ presenterinfo.name }}</a></center>
<center><i>{{ presenterinfo.department }}</i></center>
<center><i>{{ presenterinfo.university }}</i></center>

{% if presentationinfo.abstract %}
{{ presentationinfo.abstract }}<br/>
{% endif %}
<br/>
{% endif %}
{% endfor %}

</div>