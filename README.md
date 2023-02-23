# PEER Workshop website

This repository houses the [website for the PEER Workshop](http://peer-workshop.github.io). Its design is based on the jekyll template [dactl](https://github.com/melangue/dactl), which is a fork of [daktilo](https://github.com/kronik3r/daktilo).

## Editing metadata

Metadata about people, talks, and the workshop schedule rendered on the website is stored in the [`_data/peer2023.yml`](https://github.com/peer-workshop/peer-workshop.github.io/blob/main/_data/peer2023.yml) file.

### Editing participant metadata

To edit information about a participant, you should edit the relevant entry in the [`people`](https://github.com/peer-workshop/peer-workshop.github.io/blob/main/_data/peer2023.yml#L1) section of the [`_data/peer2023.yml`](https://github.com/peer-workshop/peer-workshop.github.io/blob/main/_data/peer2023.yml) file. An example entry can be found below:

```yaml
nvenhuizen:
    name: Noortje Venhuizen
    website: https://njvenhuizen.github.io/
    university: Tilburg University
    department: Department of Cognitive Science & AI
    image: nvenhuizen.jpg
    role: keynote
    description: "Noortje's research investigates formal (symbolic/distributional/probabilistic) models of linguistic meaning and how they can be applied and evaluated, using cognitive modeling, behavioral experiments, and computational methods in natural language understanding."
```

Valid `role`s are `keynote`, `talk`, or `organizer`. Images are assumed to be stored in `assets/img/peer2023` (specified in the header of the markdown for the specific page).

### Editing talk metadata

To edit information about a talk, you should edit the [`presentations`](https://github.com/peer-workshop/peer-workshop.github.io/blob/main/_data/peer2023.yml#L81) section of the [`_data/peer2023.yml`](https://github.com/peer-workshop/peer-workshop.github.io/blob/main/_data/peer2023.yml) file. An example can be found below:

```yaml
nvenhuizen:
    type: virtual
    presenter: nvenhuizen
    title: Expectation-based Semantics in Language Comprehension
    abstract: The processing difficulty of each word we encounter in a sentence is affected by both our prior linguistic experience and our general knowledge about the world. Computational models of incremental language processing have, however, been limited in accounting for the influence of world knowledge. I present an incremental model of language comprehension that integrates linguistic experience and world knowledge at the level of utterance interpretation. Our model constructs--on a word-by-word basis--rich, distributed representations that capture utterance meaning in terms of propositional co-occurrence across formal model structures. These Distributional Formal Semantics representations are inherently compositional and probabilistic, capturing entailment as well as probabilistic inference. To quantify linguistic processing effort in the model, we adopt Surprisal Theory; in contrast with typical language model implementations of surprisal, our model instantiates surprisal as a comprehension-centric metric that reflects the likelihood of the unfolding utterance meaning as established after processing each word. I will present simulations that illustrate how the model captures processing effects from various semantic phenomena and how linguistic experience and world knowledge combine in determining online expectations. Finally, I will discuss implications of our approach for neurocognitive theories and models of language comprehension.
```
