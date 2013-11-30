---
published: true
title: Styleguide

shortname: styleguide
description: My HTML/CSS Code Styleguide

layout: markdown.hbs
---

#Styleguide
I have a very particular style to my code that is very different from anyone else. Being a designer, I have found a way to logically (to me at least) orgainize my code so that is still provides optimum performance.
 
I am it no way saying this is the best way to write code; this is just the way that makes most sense to me and loads the best.
 
## HTML
I try to write my HTML as stucturally as possible. When writting, I usually layout the entire content for a page in HTML and take a look at it before adding one character of CSS. 

### Case
Most elements in HTML are case-insensitive. The only thing I capitalize is the ``<DOCTYPE! html>``` declaration. 

### Head and Metadata
In order to load page content in the best possible way, stucture the `<head>` like so:
- Title
- Description
- Charset, HTTP-equiv, viewport
- Inline Styles
- Javscript File
- Stylesheet
- IE Conditional Comments
- Other meta data
I reason to have inline styles in the head before the stylesheet, but I won't get to that now.

### Closing Tags
With HTML5 we don't have to close certian elements, like list elements:

```html
<nav>
	<ul>
		<li><a></a>
		<li><a></a>
	</ul>
</nav>
```

### Whitespace
Usually, I do not leave white space in HTML. This is very different from most developer's approach, but for me it makes sense to not have whitespace.

### Closing Tag Comments
For smaller websites I usually do not place  a comment by a closing tag. However on larger sites, where I might have multiple closing tags of the same element, I will:

```html
<div class=container>
	<div class=content>
		<div class=box>
		</div><!-- /box -->
	</div><!-- /content -->
</div><!-- /container -->
```

### Attributes
With HTML5 you no longer have to wrap attributes in commas. For example ``<div class="content"></div>``` can be written as ```<div class=content></div>```. Of course, you do not have to write attributes like this, but I like the appearance of it. Remember however, that you can not have space, thus ```<div class=content page></div>``` would be invalid. You have to use ```<div class="content page"></div>```. This is also valid for metadata tags, href, src and other attributes as well. 

### HTML5 Elements
HTML5 has several new elements, I have adopted the WS3 standards for using these elements and use them for all of my current work. 

#### Article Element
For any page with a body of content that is a written article, use the `<article>	` tag. Wrap the title, subtitle, description of the article in a `<header>`. Include the content of the article in a `<section>` and place the author bio and name in a `<footer>`. In the case that a date/time is provideded use the time element like so: 

```html
<time datetime=20131212 pubdate>December 12th, 2013</time>
```

#### Section Element 

#### Header Element

#### Footer Element

#### Nav Element

#### Main Element
Wrap all content of the page in `<main role=main class=main>'. I always include the class `.main` with this element because it is an easy way to style all page content. 

## CSS & LESS
I write all my stylesheets in LESS and use Grunt to compile these stylesheets into CSS. I choice LESS over Sass simply because the Sass grunt plugin wasn't working for me one night so I had to move to LESS. From that moment I started styling all my work with LESS.

### Variables
I orgainize my LESS variables on one stylesheet like so:

```css
	@padding	:	20px;
	@margin		: 	20px;
	@height		: 	20px;
	@width		: 	20px;	
```

This allows me to see the name and value of each variable very easily. 

###  

###