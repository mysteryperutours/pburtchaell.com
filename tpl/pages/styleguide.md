---
published: true
title: Styleguide

shortname: styleguide
description: My HTML/CSS Code Styleguide

layout: markdown.hbs
---

# Code Styleguide
I have a very particular style to the way I write code that is very different from anyone else; this document explains that style and my reasoning behind it. I am in no way saying this is the best way to write code. Rather, this is just the way that makes the most sense to me. Also, this is the code styleguide, not my personal [design styleguide](http://pburtchaell.com/design-styleguide/ "design styleguide").
 
## HTML 
I try to write my HTML as stucturally as possible. I usually code all the HTML for a page before I begin my stylesheets. 

### Case
Most elements in HTML are case-insensitive. I use all lowercase, the only thing I capitalize is the `<DOCTYPE! html>` declaration. When using Handlebars templates, I will capitalize the second word in a bracket so I can easy read each word --for example: 

```handlebars
<h1>{{firstName}}</h1><!-- Not {{firstname}} -->
```

### Closing Tags
With HTML5 we don't have to close certian elements, so I don't use them. For example, list elements:

```html
<nav>
	<ul><!-- We don't need a closing </li>, so don't use it -->
		<li><a></a>
		<li><a></a>
	</ul>
</nav>
```

### Whitespace
Usually, I do not use white space in HTML. However, if a page is complex and whitespace will help a someone navigate the code easier, I will use whitespace to seperate major blocks of code. 

### Closing Tag Comments
For smaller projects I usually do not place a comment by a closing tag. However on larger sites, where I might have multiple closing tags of the same element (like five `</div>`'s right after another), I will add a comment.

```html
<div class=container>
	<div class=content>
		<div class=box>
		</div><!-- /box -->
	</div><!-- /content -->
</div><!-- /container -->
```

If I am working on a project that uses both classes and IDs I will use closing tag comments like so: 

```html
<div id=someID>
	<div class=content>
	</div><!-- /.content -->
</div><!-- /#someID -->
```

### Attributes
With HTML5 you [no longer have to wrap attributes in commas](). For example `<div class="content"><a href="localhost"></a></div>` can be written as `<div class=content><a href=localhost></a></div>`. Of course, you do not have to write attributes like this and the spec does not call for you to, but I like the appearance of it. Remember, however, that you can not have a space; thus, `<div class=content page>` would be invalid. You have to use `<div class="content page">`.

### HTML5 Elements
HTML5 has several new elements, I follow the [WS3 standards]() when using those elements. The WS3 does not specify _how_ we should use some of the new elements, so I will briefly cover how I use some of the most useful elements.  

#### Article Element
For any page with a body of content that is a written article, use the `<article>` tag. Wrap the title, subtitle, description of the article in a `<header>`. Include the content of the article in a `<section>` and place the author bio and name in a `<footer>`. In the case that a date/time is provideded use the time element like so: 

#### Article Element 
The article element is very self explainatory, but I feel it is important to note how I use the other new HTML5 elements. For example, here is a rough example of how I have my blog posts structured.  

```html
<article>

	<header class=article-header>
		<!-- Title, author name, etc. -->
	</header>
	
	<section class=article-content>
		<!-- Lorem ipsum or something like that -->
	</section>
	
	<footer class=article-footer>
		<!-- Author bio, social media, etc. -->
	</footer>
	
	<aside class=article-aside> 
		<!-- Comments Thread -->
	</aside>
	
</article>
```

#### Header Element
When using the header element for a page (think branding, navigation, etc.) I always include the class `.page-header`. Otherwise, the header will be used for article elements. When used with article elements, usually the header will include the article title; author name and/or profile picture; publish date & time; and other infomation that would be helpful to know before reading the article itself. 

#### Section Element 
I always wrap the content of the article in a section tag, otherwise I follow the [WS3](http:// "WS3") specs.

#### Footer Element
When using the footer element for a page (think copyright, links, etc.) I always include the class `.page-footer`. When used with an article, the footer will contain infomation that does not relate directly to the article. Things like social media buttons, author biography and links.  

#### Aside Element
Outside of what the [WS3](http:// "WS3") calls you to use the aside element for, I always wrap the comments of an article element (if applicable) in an aside element.  

#### Time Element
While I do not always put the time element in the same place, I always make sure an article element has one. Looking at the source code of websites, I notice the `datetime` and `pubdate` attribites are not always used by developers; since not using these attributes is like not using an `href` on a link, I always have atleast one, if not both, on the element:

```html
<time datetime=20131212 pubdate>December 12th, 2013</time>
<!-- Note that datetime must be formatted as YYYYMMDD -->
```

#### Main Element
Wrap all content of all pages in `<main role=main class=main>`. I always include the class `.main` with this element because it is an easy way to style all page content. 

## CSS & SCSS
I write all my stylesheets in [LESS]() and use [Grunt]() to compile these stylesheets into CSS. I choose LESS (over Sass or Stylus) simply because the static site generator I use works well with LESS.

### Variables
I orgainize my variables so that the colons and values for each property line up:

```scss
@padding    :  20px;
@margin     :  20px;
@height     :  20px;
@width      :  20px;	
```

This allows me to see the name and value of each variable very easily. 

### Class selectors versus ID selectors
I always use class selectors in my stylesheets. ID selectors [have been proven to be slower], so I avoid them. 

### OOCSS versus MCSS
[Object Oriented CSS]() and [Modular CSS]() are two buzz worlds in the web design/development industry. I don't really perfer one over the other. Rather, I write CSS the way I have always written it. I break my project into partials (or modules..) and then from there write everything using object oriented classes. Typically I try to limit myself to only using one to three classes per element.

