---
title: Naming font-files for the web
description: A method for the URL format of font-files.
date: 2014-03-24
keywords:
- font-face declarations
- web fonts
template: post.hbt
---
In the past, I've used a `url()` for all font formats, `.woff`, `.eot`, `.ttf`, and even SVG, just because I wanted to be safe; I figured that was probably unnecessary, so I did a bit of research to figure out which ones I really needed.

Turns out woff files are supported by all major modern browsers *except* (slow clap) Internet Explorer. Since I need to support IE all the way back to IE8, I will be using the EOT format. The funny thing is **no** other browser except IE supports EOT, so I will be loading it for IE and IE only (slow clap again). Lastly, Android Browser on 2.3 does not support woff files; I just switched from an Android phone running 2.3 last year so I want to support that browser. I will be loading the ttf format as well.

On my site, I use in total five different fonts. Two are FF DIN Light and Bold, and the other three are Open Sans Regular, Italic, and Italic Bold. Before I came up with my new naming scheme, I referenced these font files in my `@font-face` declaration in a somewhat unnecessary manner:

```css
src: url('fonts/opensans/opensans_regular/opensans_regular.woff');
```

That is a quite a lot of extra characters that you don’t really need; you can shorten it down by sorting all the files into one folder.

```css
src: url('fonts/opensans/opensans_regular.woff');
```

That's not perfect though. You can get even more concise with font names by translating them to number values representing the weight of the font.

```css
src: url('fonts/opensans/200.woff'); // Light
src: url('fonts/opensans/400.woff'); // Regular
src: url('fonts/opensans/600.woff'); // Bold
src: url('fonts/opensans/800.woff'); // Extra-Bold
```

All developers and designers should understand these numbers: they closely relate to the values of the CSS `font-weight` property. If you have an italic version of the font, postfix the number value with `i`.

```css
src: url('fonts/opensans/400i.woff'); // Regular Italic
src: url('fonts/opensans/800i.woff'); // Bold Italic
```

Now you can easily read and quickly understand the code with the benefit of not using a ton of characters in the process. Moreover, rewriting the `@font-face` rules to follow this method removed ~1Kb off each of my stylesheets; that, of course, is not at all a large amount, but this is just another process to look at when you do need to take *another kilobyte* off your stylesheet.