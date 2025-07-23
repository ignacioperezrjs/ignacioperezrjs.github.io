---
layout: distill
title: Stochastic Optimisation of Trading Strategies in Sequential Electricity Markets.
description: When generating energy with a portfolio with a big portion of renewables generation, there is a high uncertainty of how much energy will be generated (Q [MW], generated power and P [Euros/MW], price). Objetive of the paper is to build a optimisation model for trading that includes a risk-neutral portfolio owner and then expand it to a risk-avertion portfolio owner.
giscus_comments: true
date: 2025-07-23
featured: true
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: Emil Kraft
    url: "https://www.iip.kit.edu/86_3881.php"
    affiliations:
      name: IIP, KIT
  - name: Marianna Russo
    url: "https://neoma-bs.com/professors/russo-marianna-2/"
    affiliations:
      name: NTNU, Norway
  - name: Dogan Keles
    url: "https://orbit.dtu.dk/en/persons/dogan-keles"
    affiliations:
      name: DTU, Denmark
  - name: Valentin Bertsch

bibliography: June2021_Stochastic.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Explanation of the Blog
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Summary
  - name: Literature Review and Research Gap
  - name: Market Description
  - name: Methodology
    subsections:
      - name: Example Child Subsection 1
      - name: Example Child Subsection 2
  - name: Case Study
  - name: Conclusions and Outlook


# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

## Explanation of the Blog
This blog is oriented towards the summary and analysis of the paper ⁠ `Stochastic Optimisation of Trading Strategies in Sequential Electricity Markets`⁠. For this, the sections in here will be explanations of the paper in a summarised ways and trying to use words as simple as possible.

---
## Summary
When individual traders own a portfolio with high shares of renewables, uncertainty in future price Euros/MW  and energy production quantity MW increases.

The objetive of the paper is to controll the trading of a portfolio with renewables energy production and controllable production (gas, diesel, among others).

The conclusions, as expected are that a trader risk-neutral will prefer to take bigger risks in intra day operations. (Later, will be explained that there are 3 markets, Intra-Day, Day-Ahead and Reserve Market).

---
## Introduction
As a brief introduction to the problem, it could be summarised as a cause-effect system that can be seen as follow:
1. ⁠Because of Renewable Energy Integration into the portfolio, Uncertainty increases.
2. ⁠The existence of an auction system which includes a Day Ahead, Intra-day and reserve market makes it a more difficult system to analyse.
3. ⁠Nowadays, the way to face this market is based on $$ deterministic $$ softwares, gut feeling of the trading specialists, among others. 

{% details Click here to know more %}
Deterministic v/s Stochastic. Deterministic events always gives the same ouput given an identical input.⁠ Stochastic events Involves randomness, it's possible to produce different outputs given a "identical" inputs. 
As an example, imagine yourself want to go and ask a calculator to your university library.
**The Problem**

Suppose you and your classmates want to study in the *Student Center study room*, and you also need to borrow calculators.

Some natural questions that may arise are:

1. **What is the probability that a calculator is available?**  
2. **Is there a free table?**  
3. **Is there a small study room available?**  
4. **From the Student Center's perspective, is it worth having more calculators? Or is it an unnecessary expense?**

---

**What do we need to know to answer these questions?**

---

**Motivation**  
Problem: Study Room at the Student Center (CAI)

---

**Deterministic variables of the problem**  
*These are known and fixed values:*

- Number of chairs and tables  
- Number of chairs per table  
- Number of study boxes  
- Number of calculators  

---

**Stochastic (random) variables of the problem**  
*These are uncertain and vary randomly:*

- Arrival of students to the study room  
- Arrival of students requesting calculators  
- Time students spend in the room  

{% enddetails %}

4. For This reason, the paper intends to use a MILP software to model a trader with a portfolio that includes renewable generation units (volatille) and controllable units.

5. The idea is to model the german market. Including the $$ reserve market $$ , $$ spot market $$ & $$ Day Ahead market. $$

{% details Click here to know more %}
The difference between the Reserve, Spot and Day Ahead markets is.......
{% enddetails %}


---
## Literature Review and Research Gap

It is important to mention that the focuss of the paper is on the individual approach. The two more important are the optimal dispatch problem (unit commitment) and the optimal trading problem.
{% details Click here to know more %}
The main importance of the unit commitment and optimal trading problem.
{% enddetails %}

---
## Market Description

---
## Methodology  
  #   Example Child Subsection 1
  #   Example Child Subsection 2

---
## Case Study

---
## Conclusions and Outlook