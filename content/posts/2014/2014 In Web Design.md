---
title: 2014 in Web Design
description: Five things I will focus on in 2014
date: 2014-01-05
cover: 2014/fireworks.gif
template: post.hbt
---
As 2014 begins, I would like to introduce a few topics I intend to write about in detial throughout the year.

## 1. Responsive and Retina Images
There are many solutions for responsive images, but none of them quite seem like the proper solution. I think roadblock for solving this issue is most people misunderstand the point of responsive images and confuse it with retina images. Many of the "responsive image" solutions out there are really a retina image solution.

We need to figure if we deliver sharp images or if we deliver a properly sized responsive image. In my opinion, we should be concerned about the responsive images and once network speeds increase, focus on retina images.

I do not think retina images are necessary in 2014. Responsive images are very necessary however, and always have been. We need to make a proper solution that focuses on responsive images, but can be extended in the future to work well with retina images.

## 2. Typography control
> The control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesn’t have the same constraints, and design for this flexibility. But first, we must 'accept the ebb and flow of things.' <cite>John Allsopp: <a href=http://>A Dao of Web Design</a></cite>

I don't agree with the argument of that statement. If we really look at it, typography is horrible to control on the web and we shouldn't accept that... Besides left or right alignment, size, color, spacing and a few other properties, there isn't much else to control.

Of course no web designer wants control equal to that of print, but I belive we should still pursue properly hyphenated words, justified text, ligatures, and better open-type features. That desired control can be justified by improved readability it will provide.

There are many libaries that exist for typography control. And yes, many of them are very useful. However, they are often very tedious to control and do not work perfectly. I am not expecting a solution for better typography control to surface in 2014, but I am expecting more designers to become concerned about it.

## 3. The decline of jQuery and the rise plain JS
jQuery is awesome, but I think a web developer in 2014 can find ways around it. I am not saying the worlds needs to stop using jQuery, I am saying we need less of it. If a page needs to get smaller and faster, there is only so much one can cut out before the 32 kilobytes (when gzipped) that is jQuery v2.0.2 needs to be cut out as well.

If jQuery makes your workflow more effective, use it; if jQuery has been a part of your process for years, continue to use it by all means. I also understand there is also a great number of plugins that depend on jQuery.

Ultimately, if what I am saying will end up costing you time instead of saving it, then keep on doing what you are doing.

## 4. An end to Photoshop
Design mockups and prototypes in code, rather than in Photoshop or Illustrator.

It is becoming easier than ever to make a mockup in HTML and CSS. If one can design a functioning button or form with code in the same amount of time one can design the same button or form in Photoshop, why would you not code it? Web designers are designing interactions and the user experience; it is a different form of design than print. Users do not interact with our websites using a sheet of paper so why should prototypes be designed in Photoshop?

That being said, I think it is important to draw out rough wireframes before designing sites and I know printed designs work well for critiques and reviews. That being said, think how powerful it is when you not only have the design on the wall, but also working in your browser. You can properly demo the astetics of the site as well as the interaction.

## 5. Watch bandwidth more carefully
Most people will begin to be more careful about the size of their websites. Not everyone has an amazing 4G connection or Google fiber. Over the past year, I think that we have begun to go crazy with the sizes of websites. One page on the Oakley site takes 85 megabytes of data and 800 HTTP requests before you can see the website! Sure... I do think your site has some cool effects, but quite frankly... I don't care, I just want to see your product and how much it costs.

Of course, the sites I mention above are extreme cases, but if you take a look around you will not see that it is uncommon to find a many websites with pages ~1.5 megabtyes in size. In my opinion, this is huge for most sites! The bulk of that data is usually images and JavaScript, so I think this topic reflects on my retina image and jQuery arguments. However, we cannot blame everything on images and scripts, there is a long list of things one can do to speed up their sites. Think less HTTP requests overall; less fonts; use of only one stylesheet; use of a CDN for static assets; and less JavaScript files. Use deferred JS: secondary scripts for social media scripts and analytics should be deferred until after page load. Lazy load your images and use SVG graphics and sprites.
