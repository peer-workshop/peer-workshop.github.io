# PEER Workshop Website

This repository contains the website for the PEER workshop. The site uses a modified version of the [`jekyll-nagymaros`](https://github.com/piazzai/jekyll-nagymaros) theme.

## Adding a new iteration of PEER

There are two stages in adding information for a new iteration of PEER.

### Stage 1: Pre-decision

Prior to abstract decisions for a given year, two things need to be done. 

First, the prior year's program–found in `program.md`–should be moved to the `program/` directory and renamed YEAR`.md`. For instance, when moving the PEER2025 program, we would move `program.md` to `program/2025.md`.

Additionally, the `navorder` field should be commented out of (or removed from) the page header:

```yaml
layout: program
title: Program
description: Schedule of talks and activities for PEER 2025
#navorder: 2
program: "2025"
```

Commenting out `navorder` ensures that a link to the program does not show up in the navigation bar.

Second, a call for abstracts should be posted. Posting the call can be done by editing the `call-for-abstracts.md` file.

### Stage 2: Post-decision

After acceptance decisions have been made and the program has been determined, the program should be specified in `_data/program/`YEAR`.md`. As explained below, specifying the program involves specifying five fields: `legend`, `people`, `locations`, `presentations`, and `schedule`. To have the program show up in navigation bar, the `navorder` field should be set in the page header (generally to `2`):

```yaml
layout: program
title: Program
description: Schedule of talks and activities for PEER 2025
navorder: 2
program: "2025"
```

To ensure that the correct data are being used, the `program` field in the header must match the YEAR specified in `_data/program/`.

#### `legend`

The `legend` field determines how events in the schedule are colored.

```yaml
legend:
    title: Legend
    categories:
    - name: Keynote
      color: blue-6
    - name: Talk
      color: red-6
    - name: Break
      color: teal-6
    - name: Admin
      color: gray-4
```

In general, this field will just be copied over from the previous year's program.

#### `people`

The `people` field specifies information about organizers and presenters. Each presenter is specified using a mapping from an ID–e.g. `awhite`–to a mapping that contains `name`, `website`, `university`, `department`, and `role` (`organizer`, `keynote`, `talk`).

```yaml
people:
  apapafragou:
    name: Anna Papafragou
    website: https://www.langcoglab.com/
    university: University of Pennsylvania
    department: Department of Linguistics
    role: keynote
```

#### `locations`

```yaml
locations:
  atrium:
    name: Rettner Atrium
    building: Rettner Hall
  room:
    name: Gowen Room
    building: Wilson Commons
  zoom:
    name: Zoom
```

#### `presentations`

The `presentations` field specifies information about each presentation. Each presentation is specified using a mapping from an ID–e.g. `apapafragou`–to a mapping that contains `mode`, `presenter` (on of the IDs from `people`), `title`, and `abstract`. The ID of the presentation can (but need not) match the presenter's ID.

```yaml
presentations:
  apapafragou:
    mode: inperson
    presenter: apapafragou
    title: Events and objects in mind and language
    abstract: "Understanding how humans represent, recognize, remember and talk about events is important for several disciplines that focus on the human mind and brain. In this talk I bring together an interdisciplinary set of tools to address the nature of event representation. I present experimental evidence showing that abstract properties of event structure underlie both the conceptual and the linguistic encoding of dynamic events; furthermore, in several crucial respects, the representation of events resembles that of objects. I argue that notions of boundaries and structure underlie mental units in both the event and the object domain, and that such notions explain otherwise mysterious similarities in cross-domain correspondences. These findings have implications for both cognitive and linguistic event theories, as well as the relation between language and thought."
```

#### `schedule`

The `schedule` field specifies information about the order and time of events as well as their categories as a list. Each item in the schedule has a `time` and `location` (and ID from `locations`). Talks will additionally have a `presentation` field (and ID from `presentations`) and breaks will have a `title`.

```yaml
schedule:
  - time: 08:30-09:30
    category: Break
    title: Breakfast
    location: atrium
  - time: 09:30-9:40
    category: Admin
    location: room
    title: Opening Remarks
  - time: 09:40-10:40
    category: Keynote
    presentation: nvenhuizen
    location: room
```