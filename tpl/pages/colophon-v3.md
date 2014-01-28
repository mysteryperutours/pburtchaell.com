---
published: true
highlighting: true
title: Colophon - v3
shortName: colophon
description: Notes on the design and development of the third version of my personal site and blog
---
## Author's Statement
When I began redesigning my site in October of 2013, I decided I would take a lightweight approach to my site. I want to focus on content, not designing features. For that reason, my sit appears very simple, yet it is really elegant and complex.

## Design Notes

### Typography
I want the typography to feel natural. For that reason, I went with a slightly off-white background and a light grey value for headings and body text. Links are set in a light blue that flows with the "faded" shades of my color pallete. Only occasionaly do I style type in other colors than grey. 

!["FF DIN"]({{site.url}}/assets/img/site/styleguide/FFDIN.png "FF DIN")

My primary typeface for headings is _FFDIN_ in the weights of bold and light. A sans-serif based off _DIN 1451_, FFDIN was designed in 1994 in San Francisco. I like the functional feel of this font &mdash;especially when in uppercase&mdash; and thus feel it is suitable for titles, as most headings are. 

!["Open-Sans"]({{site.url}}/assets/img/site/styleguide/Open-Sans.png "Open-Sans")

Although FF DIN was designed to be used on screens, FF DIN is not the most readable font when smaller than 16px so I decided not to use it for the primary body font-family. Instead, I use _Open-Sans Regular and Italic_. I did not want to load too many fonts, so I do not use use Open-Sans Bold. I simply pull up the weight of the typeface using the font-weight property in CSS. My typography falls back to Helvetica and Arial if the font-files do not load.

To style code snippets using [Highlighter.js]() with a slightly modified version of the Github Style by Vasily Polovnyov. I use _Courier_ as my code typeface. 

### Color &amp; Values
In order to stay consistent with my branding, I primarily use grey values on my site. 

Limited to these three colors (in RGB) from my brand, I use color sparingly:
- <span class=red>Red</span> (for design): `rgb(230,84,87)`
- <span class=green>Green</span> (for video): `rgb(179,255,198)`
- <span class=blue>Blue</span> (for audio): `rgb(0,218,255)`

I use the following values for typography:
- Dark Grey: `rgb(70,72,74)`
- <span style="color:rgb(232,235,237);">Light Grey</span>: `rgb(232,235,237)`
- <span style="color:rgb(0,169,198);">Links</span>: `rgb(0,169,198)` (a slightly darker blue)

The white background of my site is `rgb(248,248,248)`.

## Development Notes
My site is static and generated using a [Assemble](http://assemble.io) a plugin for [Grunt](http://gruntjs.com). I write copy in either Handlebars (.hbs) or Markdown (.md). I publish my code on Github as an open-source, but my site is not hosted with Github pages. Instead, I host my site on Amazon S3. I use [Name.com](name.com) for my domain registrar and Amazon Route-58 for DNS.

A complete list of client-side JavaScript plugins:
- [Echo.js]() &mdash;on the article pages, images are lazy-loaded
- [Headroom.js]() &mdash;hides the header when scrolling down
- [Responsive-Nav]() &mdash;responsive, off-canvas navigation

### Front-End Tools
I use [Grunt](http://gruntjs.com) as a taskrunner for my site and [Bower](http://bower.io) for package management. 

Below is a complete list of Grunt &amp; Node plugins I use:
- grunt-contrib-connect
- grunt-contrib-uglify
- grunt-contrib-watch
- grunt-spell 
- assemble 
- assemble-contrib-permalinks
- assemble-less
- helper-compose
- pretty

I am waiting for Assemble to publish a version of its plugin for [Gulp](http://gulpjs.com), the new streaming taskrunner, and in the future, I may switch over.