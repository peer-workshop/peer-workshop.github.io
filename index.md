---
layout: page
title: About
published: true
images: assets/img/peer2024/
---

<div class="page" markdown="1">

<img
    class="me"
    alt="{{ author.name }}"
    src="{{ site.author.photo | relative_url }}"
    srcset="{{ site.author.photo2x | relative_url }} 2x"
/>

# Register soon!
[Registration link](https://forms.gle/582nV71mjB6cc9u17)

The **Third Workshop on Processing and Evaluating Event Representations (PEER2024)** will be held on **March 29, 2024** at Cornell University. The workshop aims to bring together researchers working on computational models of incremental language understanding with researchers working on event semantics from both a computational and experimental perspective. Presentations will focus on a variety of questions in this domain: (a) what symbolic and continuous representations of linguistic meanings are necessary for capturing different aspects of linguistic meaning?; (b)  how do we determine the psycholinguistic validity of such representations to better understand incremental processing in humans?; and (c) how might the psycholinguistically valid representations be deployed during incremental language processing? Special focus is placed on meaning representations that take the concept of an event as a core organizing principle.

The workshop is sponsored by the [Central New York Humanities Corridor](https://www.cnycorridor.net/). Its broader goals are to build collaborations among researchers in Western and Central New York and to provide a platform for giving feedback to student researchers.

## Keynote Speakers

{% for person in site.data.peer2024.people %}
{% assign personinfo = person[1] %}
{% if personinfo.role == "keynote" %}
<center>
<a href="{{ personinfo.website }}"><img class="people" alt="{{ personinfo.name }}" src="{{ page.images | relative_url }}{{ personinfo.image }}" srcset="{{ page.images | relative_url }}{{ personinfo.image }}" /></a>
</center>  
<center><b>{{ personinfo.name }}</b></center>
<center><i>{{ personinfo.department }}</i></center>
<center><i>{{ personinfo.university }}</i></center>
<!-- {{ personinfo.description }} -->
{% endif %}    
{% endfor %}

## Location

The workshop will be located at [Cornell University's Herbert F Johnson Museum of Art](https://museum.cornell.edu/) ([Directions](https://maps.app.goo.gl/ztrTsHKZvDcyvbQB6)). Virtual talks will be broadcast via zoom to in-person participants. 

Participation via zoom is by invitation only. Requests for a virtual participation invitation can be made using the registration link below.  

## Registration

There is no cost for participation in the workshop, but if you plan to attend, we ask that you register [here](https://forms.gle/582nV71mjB6cc9u17) as soon as possible to help us plan the food.

## Schedule

<table>
<tr>
<th>Time</th>
<th>Event</th>
<th>Presenter</th>
</tr>
{% for event in site.data.peer2024.schedule %}
{% if event.type == "break" %}
<tr>
    <td style="border-bottom: 1pt solid black;border-top: 1pt solid black">{{ event.time }}</td>
    <td style="border-bottom: 1pt solid black;border-top: 1pt solid black">{{ event.title }} (<i>{{ event.location}}</i>)</td>
    <td style="border-bottom: 1pt solid black;border-top: 1pt solid black"></td>
</tr>
{% else %}
{% assign presentationinfo = site.data.peer2024.presentations[event.presentation] %}
{% assign personinfo = site.data.peer2024.people[presentationinfo.presenter] %}

<tr>
    <td>{{ event.time }}</td>
    {% if personinfo.role == "keynote" %}
    <td><b><a href="{{ '/talks' | relative_url }}#{{ event.presentation }}">Keynote: {{ presentationinfo.title }}</a></b></td>
    <td><b><a href="{{ personinfo.website }}">{{ personinfo.name }}</a></b></td>
    {% else %}
    <td><a href="{{ '/talks' | relative_url }}#{{ event.presentation }}">{{ presentationinfo.title }}</a></td>
    <td><a href="{{ personinfo.website }}">{{ personinfo.name }}</a></td>
    {% endif %}
</tr>
{% endif %}
{% endfor %}
</table>

## Organizers

{% for person in site.data.peer2024.people %}
{% assign personinfo = person[1] %}
{% if personinfo.role == "organizer" %}
<center>
<a href="{{ personinfo.website }}"><img class="people" alt="{{ personinfo.name }}" src="{{ page.images | relative_url }}{{ personinfo.image }}" srcset="{{ page.images | relative_url }}{{ personinfo.image }}" /></a>
</center>  
<center><b>{{ personinfo.name }}</b></center>
<center><i>{{ personinfo.department }}</i></center>
<center><i>{{ personinfo.university }}</i></center>
<!-- {{ personinfo.description }} -->
{% endif %}    
{% endfor %}

</div>
