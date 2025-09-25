const e=`---
title: Money market
description: The market for currency and the mechanics that govern it, such as interest rates, money supply, and the required reserve ratio.
slug: notes/money-market
publish: true
lastmod: 2022-05-06
date: 2022-01-23
aliases:
- money market
- Money market
tags:
- status/seedling
- course/macroeconomics
- taxonomy/reference
---

Countries have a *Central bank* - such as *The Federal Reserve* in the USA - that governs the banking system and creates money. It doesn't *print* money, which is done by the treasury.

Central banks also control the ***money supply***. Money supply is:-:the quantity of money available. <!--SR:!2022-11-03,195,290-->

The *money supply* impacts *interest rates*. The greater the supply, the lower the *market price* - ie *interest rates*. Conversely, decreasing the money supply increases interest rates. This follows basic principles of [supply and demand](supply-demand.md).

Typically, *The Federal Reserve* has 3 goals with its *Monetary policy*:

1. Maximize employment / minimize *unemployment*
1. Stabilize the price of money
1. Moderate long-term interest rates

*Central banks* control the money supply in three ways:

1. Setting the *Required reserve ratio*
1. Discount policy (the *Interest rate* for loans from the *Central bank* to commercial banks)
1. Open market operations (buying and selling government bonds on the open market)

Central banks control the *money supply* by setting the *required reserve ratio (RRR)*. RRR governs the minimum ratio of deposits banks are required to keep as cash. The RRR limits how much money banks can loan out. Higher RRR => more cash in the reserves. By loaning out money, banks "create" money - money is credited to one customer without leaving the account of whoever deposited it! While this increases the *money supply*, it doesn't create wealth.

Loaned money can be re-deposited, then re-loaned at the rate allowed by the RRR infinitely. The limit to how much money can be created is limited; it can be calculated using:-:the *Money multiplier*. <!--SR:!2022-09-07,42,190-->

The equation for the *Money multiplier* is:-:$$\\frac{1}{RRR}$$. <!--SR:!2022-08-24,95,270-->

The money market obeys [supply and demand](supply-demand.md) just like any other good. The *market price* of money is the *interest rate* that banks pay to borrow from each other.

Since the *central bank* has total control over the *money supply*, it's not affected by *interest rates*. The *supply curve* is a vertical line.

In the money market, the *equilibrium point* is when the money demanded is equal to the *money supplied*, and results in an equilibrium interest rate.

**Expansionary** *monetary policy* is used during a *recession* to increase *aggregate demand* to *Potential real GDP* and decrease *unemployment*.

**Contractionary** *monetary policy* is used when *inflation rates* are high. By decreasing the *money supply*, they increase the *interest rate* to decrease *aggregate demand*.

## Quantity theory of money

The *quantity theory of money* states that there is a directly proportional relationship between:-:the *money supply* and *inflation rate*. <!--SR:!2022-08-18,22,190-->

Under the *quantity theory of money*:

1. *Inflation* occurs when the *money supply* grows faster than output - the *aggregate supply*
1. Deflation occurs when the *money supply* grows *slower* than *aggregate supply*
`;export{e as default};
