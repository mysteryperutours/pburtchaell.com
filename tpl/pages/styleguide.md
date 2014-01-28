---
published: true
highlighting: true
title: Code Styleguide
shortName: styleguide
description: The code styleguide I use both my personal web site and on all my projects.
---
I have a very particular style to the way I write code that is very different from anyone else; this document explains that style and my reasoning behind it. I am in no way saying this is the best way to write code. Rather, this is just the way that makes the most sense to me. Also, this is the code styleguide, not my [design styleguide](http://pburtchaell.com/design-styleguide/ "design styleguide").
 
## HTML 

### Case
Most elements in HTML5 are case-insensitive. I use all lowercase, the only thing I capitalize is the `<DOCTYPE! html>` declaration. When using Handlebars templates, I will capitalize the second word in a bracket so I can easy read each word.

### Closing Tags
With HTML5 we don't have to close certian elements, so I don't use closing brackets for them. For example, list item elements:

```html
<nav>
	<ul>
		<li><a></a>
		<li><a></a>
	</ul>
</nav>
```

### Whitespace
Usually, I do not use white space in HTML. However, if a page is complex and whitespace will help a someone navigate the code easier, I will use whitespace to seperate major blocks of code. 

### Closing Tag Comments
For smaller HTML I usually do not place a comment by a closing tag. However on larger sites, where I might have multiple closing tags of the same element (like five `</div>`'s right after another), I will add a comment in order to keep the HTML organized and to avoid mistakes in the future.

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
With HTML5 you no longer have to wrap attributes in quoation marks. For example `<div class="content">` can be written as `<div class=content>`. Of course, you do not have to write attributes like this and the spec does not call for you to, but I like the appearance of it. Remember, however, that you can not have a space; thus, `<div class=content page>` would be invalid. You have to use `<div class="content page">`.

### HTML5 Elements
HTML5 has several new elements, I follow the [WS3 standards]() when using those elements. The WS3 does not specify _exactly how_ we should use some of the new elements, so I will briefly cover how I do.

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

## CSS &amp; SCSS
I write all my stylesheets in SCSS. I do not perfer LESS over Sass and vice-versa; I simply use which ever language makes sense for the project.

### Variables
Allowing me to see the name and value of each variable very easily, I orgainize my variables so that the colons and values for each property line up:

```scss
@padding  :  20px;
@margin   :  20px;
@height   :  20px;
@width    :  20px;	
```

### Properties and values
One of my faults is that I tend to not write properties in CSS in any particular order. I do have an order that I perfer them to be in, but when I am in the zone and code is flowing from my keyboard my properties never end up this way and I have to go through my stylesheet later to clean everything up. Nevertheless, here is an example:

```css
.someclass {

  /* Start from the inside, the "core" properties */
  display: block;
  position: relative;
  height: 100px;
  width: 100px;
  margin: 25px 0 25px 0; // always use shorthand
  padding: 25px;
  
  /* Typographic properties in the middle */
  font: 14px Arial;
  font-weight: 600;
  text-align: center;
  line-height: 1.0;
  color: white;
  
  /* Next, any "appearance" properties*/
  background: black;
  border-radius: 100%;
  border: 1px solid white;
  
  /* Finally, any properties with browser prefixes */
  -webkit-transform: translate(20px);
     -moz-transform: translate(20px);
      -ms-transform: translate(20px);
       -o-transform: translate(20px);
          transform: translate(20px);
  transition: all 1s ease-out;
  
}
```

### Selectors
There are many types of selectors in CSS, each with their own pros and cons.

#### Class selectors & ID selectors
> `.someClass & #someID`

I use mostly class selectors in my stylesheets. Since ID selectors [are proven]() to be slower than class selectors, I avoid them. I avoid polluting my HTML with classes and for that reason, class electors are not the only selectors I use.  

#### Universal selector
> `*` 

I never use the universal selector, no matter what the situation is. It is slow and clunky and defeats the purpose of cascading styles.

#### Element selectors
> `a li`

I avoid using element selectors because browsers read stylesheets from right to left. 

If you are using this selector:

```css
div.nav li a {
  color: red;
}
```
You would read "style unordered list element containing a list item containing a link red". The browser will read: "style links within the list-item, within the unordered list element red". This may not seem bad, but it is becuase the browser has to find EVERY link element on the page, then it says "which of this link elements are in list-items". Next the browser finds all the links within list-items. Finally the browser finds all the links within list items in the div with the class "nav". As you can see, you are making the browser search the DOM three times more than it needs to. If you use a class such as `.nav-item` the browser only has to search the DOM once.