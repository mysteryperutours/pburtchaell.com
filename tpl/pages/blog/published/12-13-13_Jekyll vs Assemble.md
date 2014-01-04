---
published: true
title: Jekyll vs Assemble
shortName: jekyll-vs-assemble
description: The nuts and bolts of two great static site generators.
date: December 13, 2013

tags:
- web development
- jekyll
- assemble
- grunt.js
- node.js

category: Web Development
featuredImage: img/site/blog-cover.jpg
featuredImageAlt: Cell phone lying on a desk
---

> Disclaimer: This is an article on the differences between Jekyll and Assemble. Read [this article]() if you are interested in why I use a static site generator and Assemble. 

In case you don’t know, Jekyll and Assemble are static site generators. What this means is that rather than using a dynamic content management system, like [Wordpress](http://wordpress.org) or [Ghost](http://ghostcms.org), every page on your website is generated from a content file. Content files can be either Markdown or data. 

By know you have probably heard of the new and impressive static site genitor on the block, Assemble. It is written to challenge Jekyll and in my opinion, successfully does. Jekyll and Assemble seem very similar, but they have some important differences you should know. 

##Jekyll

> Jekyll is blog-aware 

Those are the words from the homepage of the Jekyll project. What this means is that if you are designing a website that is just a blog –nothing else, Jekyll will be great for you. If you run `$sudo Jekyll` a boilerplate site structure will be setup for you and all you have to do is write a style sheet, setup your templates, and create content. It is easy.  

###Project Structure
The default structure of a Jekyll site is very self-explanatory: within the top directory, there is a folder for plugins, templates, and partials. The content folder containing your blog posts, along with everything else, will be compiled to a folder titled `_site` upon running `$sudo Jekyll build`.

###Templates & Partials
The Jekyll template engine uses liquid templates. It is very easy to create a loop on your category/home pages to display the most recent posts. Partials are very simple in Jekyll. Simply add an HTML file to the partials folder and you can include it in any page or template within the project. 

###Assets Management
Here is where I start to get disappointed with Jekyll. I use [Grunt]() on every project; therefore I have plugins for many different processes, from compiling LESS and minifying JS, to Live-Reload and Watch. Getting these plugins to work well with Jekyll is a pain. I won’t go through all the details, but just keep in mind that two aren’t compatible at all. If you use Grunt in your workflow, you will be much happier with Assemble. 

##Assemble

> Assemble is content-aware

Assemble calls itself _content-aware_ for a reason; it doesn’t care what you throw at it: HTML, JSON, Markdown, Yaml, it can handle it all. For this reason, Assemble is the better option if you have a website that is not only a blog.

For example, with my site, I write my articles in Markdown. This makes it very easy for me to post them on different mediums —even Tumblr supports Markdown. However, I also have several other pages on my site that would not make sense to write in markdown. I write those in pure HTML.

In addition, since all of my portfolio items are very similar, I write those in JSON data. This makes sense because each post to my portfolio requires the same set of data. I just add a new data file to a directory and Assemble turns it into an HTML page with all the content. 

##Grunt 
Before moving on it is important to remember that Assemble is a plugin for Grunt, which I mentioned previously. If you aren’t familiar with Grunt and how it works, I suggest you read through the [documentation]() on their website. 

Co-written by one of the members of the core team for LESS, Assemble works seamlessly with the Grunt plugin for LESS. In addition, the possibilities of tying other plugins in with it are endless. Assemble also has a set of “assemble-contrib-” plugins maintained specially for the project. 

##Project Structure
The project structure of Assemble is configured within your project’s gruntfile. Because the gruntfile is written in JavaScript, you can use arrays and globing to add the locations files and folders to the plugin; therefore, the size of your project and the methods you use to organize files is endless. 

Generally each Assemble project will have a layouts, pages, partials, snippets, data, and assets folder. I usually keep any template related files in a `tpl` folder, any development source files (data, LESS, CoffeScript) in an `src` folder. The final production site, along with assets, is exported to a `dist` folder. 

###Templates, Partials, and & Snippets
Assemble templates and pages are written in [Handlebars](). Handlebars is a template language that makes sense to me and is very common. There are tons of documentation, templates, and articles for/on Handlebars on the web and many useful Handlebars plugins for Grunt. In addition, many code editors recognize the Handlebars extension (*.hbs) thus supporting syntax highlighting. Partials are very easy to implement into an assemble project. Like I said earlier, you can use globing when configuring the project. 

###Data
One of the primary differences between Assemble and Jekyll is the support of different data formats. While Jekyll does allow you to use data, this usage is very limited. With Assemble, the usage of data has no bounds. Theoretically, your entire site could be built from the content of JSON files. 

###Helpers
Assemble has many helpers. While I won’t explain the functionality of each helper here, you can [read the documentation here]().  

##Permalinks

##In conclusion
If you are building a simple blog and do not use Grunt, chose [Jeykll]().  If are you building a site with more than just a blog, such as a portfolio and content pages, and also use Grunt for everything, chose [Assemble](http://assemble.io/). 

###Further Resources
Sometimes the choice for building your site isn’t that simple. Before making your choice, you may want to checkout these links: 

- Boilerplate Jekyll project on [Github](http://github.com/pburtchaell/site-jekyll) 
- Boilerplate Assemble project on [Github](http://github.com/pburtchaell/init-assemble) 
- The [source code for this site](http://github.com/pburtchaell/site-assemble), an Assemble Project
- The [source code of Daniel Edan’s site](), a Jekyll Project
- The [the source code of CSSWizardy’s site](), a Jekyll Project


