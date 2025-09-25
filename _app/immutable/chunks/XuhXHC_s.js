const e=`---
title: The learning process
description: A repeating cycle of receiving input, processing it to create output, evaluating that output, and evaluating results to improve future processing.
slug: notes/learning-process
publish: true
lastmod: 2021-07-27
date: 2021-07-27
aliases:
- The learning process
tags:
- status/evergreen
- topic/learning
- taxonomy/idea
---

I've observed that the learning process has 4 generalized steps:

1. Inputs are received and processed.
1. The input processing system runs to produce an output.
1. The output is evaluated.
1. Evaluation results are incorporated back into the input processing system.

## Examples of the learning process

The learning process seems to be common in domains rich with knowledge workers. Tech being a prominent example, has two extremely popular implementations of the learning process:

## *Agile sprint*s

1. During sprint planning, feature requests and bugs are received as inputs. These inputs get processed into *User stories* which have valuable metadata like estimated completion time and priority. The team then decides which tasks will produce the best output at the end of the sprint.
1. During the sprint, the team does the work outlined in the user stories they selected in sprint planning (this is the input being processed to produce an output).
1. At the sprint review, delivered work is evaluated against the *Definition of done* from the committed user stories.
1. At the sprint retrospectives, the team uses the insights of how they did during the current sprint to figure out ways of refining their process for the next sprint.

## Feed-forward *Back-propagation* *Neural networks*

1. Inputs values are provided to the input neurons
1. The inputs are fed forward through the neural network to produce values at each output node
1. The output is scored.
1. Results from scoring the output are sent back through the neural network so connection weights can be tweaked to produce better results using Back-propagation.

Related: [The world is recursive](world-recursive.md).
`;export{e as default};
