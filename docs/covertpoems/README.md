## Recipe for Erotic Event Listeners 🌹

This recipe is inspired by a tradition of computational & digital poetry, as well as by feminist writers who write about love, pleasure, and healing. This is a template and starting point for building a simple digital love poem focused on opacity/transparency, and click/touch interactions. 

We can play with the browser space as a world of play, poetry, and pleasure even. As users of computational machines we spend minutes if not hours of everyday clicking, swiping, touching the <body> of a webpage. Let’s pretend for a moment that the cursor is my hand, or body, seemingly immaterial, floating. Can a hover state be a gaze, or a click be a caress?

## Keywords
Love Poems, Digital Poetics, Browser

## Full Description

This recipe is inspired by a tradition of computational and digital poetry, as well as by feminist writers who write about love, pleasure, and healing.

Audre Lorde, in [Uses of the Erotic](https://uk.sagepub.com/sites/default/files/upm-binaries/11881_Chapter_5.pdf), writes:
 >“When I speak of the erotic, then, I speak of it as an assertion of the lifeforce of women; of that creative energy empowered, the knowledge and use of which we are now reclaiming in our language, our history, our dancing, our loving, our work, our lives.”

In adrienne maree brown’s book [Pleasure Activism](https://www.akpress.org/pleasure-activism.html), brown encourages ways that a pleasure practice can be healing:
 >“I touch my own skin, and it tells me that before there was any harm, there was miracle.” 

Within capitalist regimes we are told we feel love and pleasure in the wrong ways, and the systems prefer everything to be subject to economies of scarcity. Particularly individuals of intersectionally oppressed identities aren’t seen as belonging with the idea of pleasure at all—doing it in the wrong ways, ways which are stigmatized and also criminalized. 

And of course there’s all the ways in which the act of writing about love—especially romantic and erotic love—is also seen as an inferior genre to other kinds of writing  because of the way these things are gendered. 

Within the traditions of material and concrete poetics, we might gently resist what this web space might be for. For instance, here’s an example of [digital love letters from 1999](https://anthology.rhizome.org/skinonskinonskin), which plays with how the cursor dances across skin: 

 <img width="400" alt="a heart pumps in a Netscape browser window from 1999, revealing steamy words that scatter across the screen" src="https://user-images.githubusercontent.com/8203939/129767323-7de55c32-66cd-42f4-945a-81067ba2c9a9.gif">

> Src: [skinonskinonskin](https://anthology.rhizome.org/skinonskinonskin)
 
We can play with the browser space as a world of play, poetry, and pleasure even. As users of computational machines we spend minutes if not hours of everyday clicking, swiping, touching the body of a webpage. Let’s pretend for a moment that the cursor is my hand, or body, seemingly immaterial, floating. Can a hover state be a gaze, or a click be a caress?

Writing about love can often invite a kind of discretion, secrecy, for a number of different reasons—think pillow books, innuendos. This recipe is also inspired by modes of secret writing. In the browser, to be literally transparent means to hide away. To be opaque in our expression, means to show all. You might also play with visibility, legibility.

**Who is it for?**
This recipe is a simple and humble one. It’s aimed at people who are just starting out their understanding with “how the browser is built,” that offers a playful way to think about “touch” and “click” and toggling the appearance of a DOM element. Making websites from scratch too, can be a radical act of moving away from the nonconsensual transactions, constraints, and terms of service set out by today's software empires. 

Here is the [basic example](https://kaaathy.com/covertpoems/index.html):

<img width="600" alt="a gif of a mouse roving a webpage with an image of a rose, looking for text which says things like, lick your flower bud" src="https://user-images.githubusercontent.com/8203939/129781977-b13910d1-3627-4ebb-89bb-2d19fd9af964.gif">

## Instructions
  
### 1. Write a love poem:
* If it’s easier, write it not as a poem, but as a list. 
* If you'd like structure, consider traditional poetry formats, e.g. 14 lines in the rough structure of a sonnet. Or 5 lines for a haiku. 
* Perhaps it’s someone you fancy, with whom you want to be discreet. Perhaps this poem is dedicated to yourself, or a part of the body.
* What do you love about this part of the body?
* You can think about erotic love, and think about verbs that you would like to include. You can stay within a realm of romantic, platonic, or other kinds of love. Whatever is more comfortable. 
* Maybe you start every line with a different verb [“touch,” “taste”, “stroke”]. Maybe you start every line with the word “you…”
* For net-based written inspiration, consider [Craigslist Missed Connections](https://newyork.craigslist.org/d/missed-connections/search/mis) (go with discretion...) or erotic Fan Fiction sites...

    <img width="400" alt="love poem by audre lorde" src="https://user-images.githubusercontent.com/8203939/129765294-ec1810ae-6a91-4700-99fe-305bd52a1060.jpg">
> _Love Poem by Audre Lorde_
 
  
### 2. Download the [template.zip](https://github.com/kathymakes/kathymakes.github.io/blob/master/covertpoems/template.zip) and unzip it.
 
### 3. In the code:

* The template.zip should include “index.css,” “index.html,” “script.js.” Open all three files in a text editor of your choice. Download here: 
 
* Beginning in **script.js**: On line 1, after the equal sign “let desires = …”, replace the data with your own poem. Think about if you want to split it up on every line break, or on every word...
 
 <img width="500" alt="image of the text editor, showing an example array" src="https://user-images.githubusercontent.com/8203939/129782342-47353fa4-4f41-42a1-9b19-cf43306f209e.png">

* On line 16: If you would like, you can change the event listener “click” to other kinds of events. Mouseover, mousedown… here is a full list of all event listeners: [HTML DOM Event Object Reference](https://www.w3schools.com/jsref/dom_obj_event.asp)
  
* **In index.html**: On line 15, between the h1 brackets, replace the title of the poem with your own. What instructions might you give to someone reading this poem?
* **In index.css**: On line 3, change the background image to be the name of your own image file. Maybe it’s something that reminds you about the person/idea you are writing to, or maybe it’s something completely random and meant to disguise the website from your intended audience.

<img width="300" alt="a woman's tongue licking a keyboard" src="https://user-images.githubusercontent.com/8203939/129765868-a3a1ea06-b78d-4f28-8af0-382b845cde2a.png">
 
> Src: [Women in Concrete Poetry: 1959-1979](https://primaryinformation.org/product/women-in-concrete-poetry-1959-1979/)
  
This is just meant to be a starting point, but perhaps you want to play with other structures entirely. Here is a [love poem builder](https://kaaathy.com/digpo/may.html) that I made back in 2014, if you want to see other kinds of interactivity.

<img width="500" alt="a grid of flowers blooming on a black background. each flower has a word attached to it, like you, me, take, sigh" src="https://kaaathy.com/work/digpo-imgs/may-3.gif">


## Further Reading
* [The Uses of the Erotic, Erotic as Power](https://uk.sagepub.com/sites/default/files/upm-binaries/11881_Chapter_5.pdf)
 by Audre Lorde
* [Audre Lorde's Poetry](https://www.poetryfoundation.org/poets/audre-lorde), Poetry Foundation
* [Pleasure Activism: The Politics of Feeling Good](https://www.akpress.org/pleasure-activism.html) by adrienne maree browne
* [skinonskinonskin](https://anthology.rhizome.org/skinonskinonskin) by Auriea Harvey and Michaël Samyn
* [Women of Concrete Poetry](https://poetrysociety.org/features/in-their-own-words/concrete-poetry)

**Tech Resources**
* What is an event listener? [JavaScript DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
* What are different mouse events? [MouseEvent - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
* What are different touch events? [Using Touch Events - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events)

**Also of Interest**
* Sex workers, technology, social justice: [Hacking // Hustling](https://hackinghustling.org/)
* Computational, material, electronic poetry, in no particular order: [Patchwork Girl](https://www.eliterature.org/Awards2001/fiction-JacksonShelley.php), [OuliPo](https://en.wikipedia.org/wiki/Oulipo), [A House of Dust](https://www.centerforthehumanities.org/james-gallery/exhibitions/house-of-dust)
