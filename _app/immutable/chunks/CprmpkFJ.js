const e=`---
title: The principal-agent problem
description: When there is a conflict in priorities between one party (the principal) and another party (the agent) that executions on their behalf.
slug: notes/principal-agent-problem
publish: true
lastmod: 2021-11-29
date: 2021-11-29
aliases:
- The principal-agent problem
- principal-agent problem
- moral hazard
tags:
- status/seedling
- taxonomy/reference
---

Collaboration runs smoothly when the the involved parties trust each other. As Harari discusses in *Sapiens*, humans have invented many systems of shared values to establish this trust between people who lack a direct relationship - religion, government, companies, etc.

Another issue with trust is the alignment of incentives. Taleb discusses this in *Skin in the Game* as *risk asymmetry*. The principal-agent problem is when the party that is making decisions (the agent) and the party of those decisions are made for (the principal) have asymmetric exposure to the risks and rewards of those decisions.

A simplistic view is that each party has 2 possible outcomes; they can win or lose. There are 4 possible outcomes:

||Principal|Agent|
|-:|---------|-----|
|1|Win|Win|
|2|Win|Lose|
|3|Lose|Win|
|4|Lose|Lose|

## Asymmetry of risk and reward

When the agent isn't exposed to the risks of their decisions, they may not have the best interests of the principal in mind. This asymmetry of risk can lead to undesirable outcomes. The agent could take advantage of the Principal and still gain a reward, producing a *lose-win* outcome. Some examples:

* A financial advisor who gets paid the same whether the investors they are advising make or lose money
* Corporate strategists who get paid a bonus on quarterly cadence but make decisions on a 3-year time horizon
* Legislators who write laws that don't impact them

## Alignment of risk and reward
`;export{e as default};
