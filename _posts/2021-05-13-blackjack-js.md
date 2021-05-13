---
layout: post
title: Blackjack Javascript
subtitle: Skills used -> javascript, html, css
---

I've been learning Javascript and React through Scrimba's frontend developer path, and of course 
as soon as I finish module 6 they drop a whole new module 3 and updates to modules 4 and 5! I don't 
_have_ to go through them all again but the bigger projects in module 3 caught my eye and I thought it
would be fun to use my more advanced knowledge to see how much I could build by myself. The blackjack game 
was a fun project, especially using some simple css to make the cards look like cards. I really wanted to 
put in dealer functionaility so it would actually play like normal blackjack. The code, I will admit, is a bit messy
at the moment. I am trying to decide if I should clean it up in pure javacsript or rewrite it in React since I haven't 
done much React coding lately (although the more I work through these Javascript courses the more I understand what is 
happening in React). 

Play my blackjack game [here](https://claireramming.github.io/blackjack/)!

See my code on [github](https://github.com/claireramming/blackjack).

### Current functionality past Per's course:
- keeps track of cards as if playing with full deck each game.
- cards look like actual cards
- support ante and "winning"/"losing" credits
- added Dealer functionality
  - hides dealer's initial second card until you are done
  - draw cards until you'd like to hold
  - shows the second card once holding
  - dealer logic forces dealer to draw until over 17
  - checks for natural blackjacks

### known bugs:
- FIXED: occasionally drawing two cards on one click

### upcoming functionality
- allow soft hands (currently all aces are 11 unless the drawn ace would force a bust)
- allow splitting of aces
