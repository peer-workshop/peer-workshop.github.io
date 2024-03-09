---
layout: page
title: Talks
published: true
---

<div class="page" markdown="1">

# PEER 2024

# Keynotes

<br/>

{% for presentation in site.data.peer2024.presentations %}
{% assign presentationid = presentation[0] %}
{% assign presentationinfo = presentation[1] %}

{% assign presenterinfo = site.data.peer2024.people[presentationinfo.presenter] %}

{% if presenterinfo.role == "keynote" %}


<center><a name="{{ presentationid }}"></a><b>{{ presentationinfo.title }}</b></center>
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

{% for presentation in site.data.peer2024.presentations %}
{% assign presentationid = presentation[0] %}
{% assign presentationinfo = presentation[1] %}

{% assign presenterinfo = site.data.peer2024.people[presentationinfo.presenter] %}

{% if presenterinfo.role == "talk" %}

<center><a name="{{ presentationid }}"></a><b>{{ presentationinfo.title }}</b></center>
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