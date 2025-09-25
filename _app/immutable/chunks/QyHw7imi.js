const e=`---
title: Price Elasticity of Demand (PED)
description: Price changes impact the demand for goods and services. PED is a microeconomics tool for quantifyng that impact.
slug: notes/price-elasticity-demand
publish: true
lastmod: 2022-05-21
date: 2021-09-28
aliases:
- Price Elasticity of Demand (PED)
tags:
- status/budding
- course/microeconomics
- topic/microeconomics
- taxonomy/reference
---

Price Elasticity of Demand (PED) is a useful [microeconomics](microeconomics.md) tool to help quantify changes in [supply and demand](supply-demand.md). PED is used to mathematically measure [price elasticity](price-elasticity.md).

The equation to calculate PED is::-:\`PED=(% change in Quantity demanded)/(% change in Price)\`. <!--SR:!2024-01-22,611,312-->

Using the equation for PED helps analyze [price elasticity](price-elasticity.md). This is because PED makes analysis of demand change:-:**precise**.  <!--SR:!2022-06-13,51,190-->

When demand is *elastic*, the % change in **Q**uantity demanded is not equal to the % change in **P**rice; it's:-:greater. <!--SR:!2024-01-23,612,312-->

When demand is *inelastic*, the % change in **Q**uantity demanded is not the same as the % change in **P**rice; it's:-:less. <!--SR:!2024-01-24,613,312-->

To calculate the change in **Q**uantity, use the *midpoint method*. Consider the following demand table:

|Price (**P**)|Quantity Demanded (**Q**)|
|--------:|--------------------:|
|$5|100|
|$6|90|
|$7|85|
|$8|60|
|$9|40|
|$10|5|

Let's calculate the % change in **Q**uantity demanded when the price changes from 6 to 7 dollars using the midpoint method. Use this formula to calculate the % change::-: $\\frac{Q2-Q1}{\\frac{Q2+Q1}{2}}$. In friendlier terms, for two price points it's the difference in demand divided by the average (mean) demand of those prices. <!--SR:!2022-05-31,10,219-->

Using the data from our demand table, the equation looks like this: $\\frac{85-90}{\\frac{85+90}{2}}=\\frac{-5}{\\frac{175}{2}}=-5.7\\%$

When calculating the percent change for [Price Elasticity of Demand (PED)](price-elasticity-demand.md), it's not important whether it's a positive or negative percentage. We only need the:-:*absolute value*. <!--SR:!2024-01-25,614,312-->

The same formula is used for calculating changes in price. For the demand table above, this would be: \`($7-$6)/(($7+$6)/2)\` => \`$1/($6.5)\` => ~\`15.4%\`.

Bringing this all together, PED = \`5.7%/15.4%\` => \`0.37\`. The PED is less than 1 because the % change in price is greater than the % change in quantity.

When PED is less than 1 it means demand is:-:*inelastic*. <!--SR:!2022-10-28,311,319-->

When the % change in price and quantity are equal, the movement between those price points is:-:**unit elastic**. <!--SR:!2022-06-23,62,232-->

When a change in price is *unit elastic*, the PED is:-:exactly 1. <!--SR:!2022-10-27,310,318-->

If the Price elasticity of demand is greater than 1, the demand is:-:*elastic*. <!--SR:!2022-10-21,304,312-->

Some goods don't respond to price changes *at all*. Consider insulin, the medicine used by people with diabetes to regulate blood sugar. Without it, they die. When the price changes, demand stays constant. Goods with $PED = 0$ are:-:**perfectly inelastic**. <!--SR:!2022-06-03,108,310-->

The change in PED tends to correlate with the slope of a *demand curve*. The slope of the curve is not the same as PED, but can also be used as an indicator of [price elasticity](price-elasticity.md). The *demand curve* of *perfectly inelastic* goods is a vertical line - the quantity demanded is constant regardless of price.
`;export{e as default};
