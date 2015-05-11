---
title: Code Style Guide
description: A formal style guide containing methods and standards for developing robust, easily maintained, and high-performance HTML, LESS, Sass and CSS.
lunr: true
template: base.hbt
---

[LESS]: http://lesscss.org/
[Sass]: http://sass-lang.com/
[Grunt]: http://gruntjs.org/
[W3-CSS-Spec]: http://www.w3.org/style/CSS/specs.en.html
[W3-HTML-Spec]: http://www.w3.org/html/wg/drafts/html/master/Overview.html
[resource-autoprefixer]: https://github.com/ai/autoprefixer
[resource-caniuse-css]: http://caniuse.com/#cats=CSS
[resource-caniuse-html]: http://caniuse.com/#cats=HTML5
[resource-prefixfree]: https://github.com/LeaVerou/prefixfree
[resource-recess]: http://twitter.github.io/recess/
[resource-thesassway]: http://thesassway.com

This document formally describes methods and standards for developing robust, easily maintained and high-performance HTML, LESS, Sass and CSS code.

##Table of Contents

<div class=table-of-contents>
  {{#markdown}}
  1. [HTML5](#html5)
    1. [General Syntax](#general-html-syntax)
    2. [Doctype Declaration](#doctype-declaration)
    3. [Space](#space)
    4. [URLs](#urls)
  2. [LESS and Sass](#less-and-sass)
    1. [Variables](#variables)
    2. [Functions](#functions)
    3. [Mixins](#mixins)
    4. [Nesting](#nesting)
  3. [CSS](#css)
    1. [General CSS Guidelines](#general-css-guidelines)
    2. [Inline Styles](#inline-styles)
    3. [Style Attribute](#style-attribute)
    4. [Declarations, Properties, and Values](#declarations-properties-and-values)
      1. [Declaration Order](#declaration-order)
      2. [Single Declarations](#single-declarations)
      3. [Color Properties and Values](#color-properties-and-values)
      4. [Browser Prefixes](#browser-prefixes)
    5. [Selectors](#selectors)
      1. [Class Selectors](#class-selectors)
      2. [ID Selectors](#id-selectors)
      3. [Type Selectors](#type-selectors)
      4. [Pseudo-elements and Pseudo-classes](#pseudo-elements-and-pseudo-classes)
      5. [Link and Dynamic Pseudo-classes](#link-and-dynamic-pseudo-classes)
  4. [Notes on Code Robustness](#notes-on-code-robustness)
    1. [Class Names](#class-names)
    2. [HTML Comments](#html-comments)
    3. [CSS Comments](#css-comments)
  5. [Appendix](#appendix)
  6. [Contribute](#contribute)
  {{/markdown}}
</div>

## HTML5
When using HTML5 elements, always follow the [W3 Specifications][W3-HTML-Spec]. If you need to check browser support of a specification, [caniuse.com][resource-caniuse-html] is an invaulable resource.

### General HTML Syntax
- In order to guarantee that code renders the same in any environment, use soft tabs with two spaces.
- Nested elements should be indented once (two spaces) for each level.
- Never use quotes on attributes that do not have multiple values, e.g. `<a href=http://apple.com/ rel=external>`. Remember, however, that you cannot have a space, e.g.,`<div class=content page>` would be invalid; only `<div class="content page">` would be correct.
- When an attribute requires it, use double quotes and never single quotes.
- Use lowercase and dashes (not underscore or camelCase).
- Do not include trailing slash in self-closing elements.
- Closing tags are not required on certain elements in HTML5, e.g., `<li>` instead of `<li></li>`

#### Doctype Declaration
Enforce standards mode and more consistent rendering in every browser by declaring the HTML5 doctype at the beginning of every HTML page.
```html
<!DOCTYPE html>
```

#### Space
If an HTML document has complex markup and spacing will help a developer navigate the code easier, use one line-break to separate major blocks of code from one another.
```html
<main>

  <section>
    ...
  </section>

  <section>
    ...
  </section>

</main>
```

#### URLS
Use relative URLs whenever possible; this will prevent problems if the base URL ever changes during a project's lifespan.
```html
<a href=/about>About</a>
```

## LESS and Sass
[LESS][LESS] and [Sass][Sass] are two CSS preprocessors that add variables, nesting, functions, and mixins to your stylesheets and both are equally as powerful as the other. This document uses LESS syntax for examples, but Sass is very similiar; follow the same styleguide rules for both.

Notes:
 - Always write Sass with only on the first "S" capitalized.
 - LESS is written in uppercase.

#### Variables
Write local variables just as you would a CSS declaration, but always include them first.
```scss
.example {
  @base: 20px;
  height: @base;
  width: @base;
  margin: @base/2;
}
```

Write global variables just as you would a CSS declaration, but optionally include one line break between related variables. It is also helpful to prefix related variables with a common name.

Remember that variables can also be called before they are declared, e.g., you could use the variable `@color` on line 1 even though it is not declared until line 10.

```scss
@font-color: #000;
@font-size: 1rem;
@font-style: normal;

@font-bold: 'Open Sans Bold', @font-stack;
@font-italic: 'Open Sans Italic', @font-stack;
@font-stack: 'Helvetica', 'Arial', sans-serif;

@base-margin: 2rem;
@base-padding: 1rem;
@base-border: 0.25rem solid;
@base-border-radius: 0.125rem;
```

Lastly, it is a best practice to include all variables in a seperate stylesheet titled `variables.less` and import that stylesheet.

Do not include the `.less` file extension.
```scss
@import `utils/variables';
```

#### Functions & Loops
<span class="btn btn-red btn-border no-hover">Documentation in progress</span>

#### Mixins
<span class="btn btn-red btn-border no-hover">Documentation in progress</span>

#### Nesting
Avoid nesting in LESS and Sass for the sake of it.
```scss
/* Bad */
.container {
  ul {
    li {
      a {
        &:hover {
        }
      }
    }
  }
}
```

While it might make sense within the LESS document to write selectors this way, it will result in inefficient CSS.
```css
.container { ... }
.container ul { ... }
.container ul li { ... }
.container ul li a:hover { ... }
```

## CSS
Always follow the [W3 Specifications][W3-CSS-Spec] for CSS properties and values. If you need to check browser support of a specification, [caniuse.com][resource-caniuse-css] is an invaluable resource.

#### Glossary of Terms Used
> The **property** is an identifier with a human readable name, that defines which feature is considered by the engine.
> The **value** describes how the feature defined by the property must be handled by the engine.
> A **declaration** is a property and value pair; declations are grouped together in **blocks**.
> Different declarations are applied to different parts of the document by using **selectors**.
> The selector-declaration pair is known as  **ruleset**, or often just simply a **rule**.
> <cite>Mozilla Developer Network: <a href=http://developer.mozilla.org/en-US/Web/CSS/Syntax>CSS Syntax</a></cite>

### General CSS Guidelines
- In order to guarantee that code renders the same in any environment, use soft tabs with two spaces.
- Nested elements should be indented once (two spaces).
- Include one space after the `:` for each declaration.
- Each declaration should be written on its own line and indented once (two spaces).
- End each declaration with a semi-colon. The last declaration is optional, but your code is more error prone without it.
- **Never** use the `@import` method; as stylesheets can only load one at a time, this method will result in longer load times.

### Inline Styles
Optionally use inline styles to load declarations for content "above the fold". This is only an advantage if your CSS document is very small. It is disadvantageous and inconvenient for larger stylesheets.
```html
<style>
  ...
</style>
```

### Style Attribute
Although it is very common to do so, avoid using the style attribute on HTML elements in order to prioritize CSS delivery. In addition, it is against the [Content Security Policy](http://www.w3.org/TR/CSP) of W3. On occasion, it is appropriate, but should be avoided 90 percent of the time.
```html
<!-- Avoid -->
<span style="background-color:#fff; color:#555;"></span>
```

### Declarations, properties, and values
- Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px`;
- Use shorthand whenever possible, e.g., `font` instead of `font-size` and `font-family`.
- Use `!important` when necessary, but avoid repeated use.
- Use single quotes and never double quotes.
- Stay consistent with units, e.g., do not use a mixture of REM and PX for typography, only use one or the other.
- Do not include a line-break after related declarations.
- Separate unrelated declarations with one line-break.

```css
.example {
  font: normal 12px "Arial";
  margin: 0 5px 5px 0;
}
.example-2 { ... }
.example-3 { ... }

.unrelated-declaration { ... }
```

#### Declaration Order
Start from the "outside and work back in". Group related properties in the following order:

1. Positioning
2. Box model, including flexbox related properties
3. Typographic
4. Visual
5. Functional
6. Pseudo-elements/classes (LESS and Sass only)
7. Nested rulesets (LESS and Sass only)

Positioning comes first because it declares the nature of an element. The box model comes next as it dictates the dimensions and placement of an element. Typography and visual declaration declarations take place on the "inside" of the element and generally do not affect the "outside". Functional declarations (animations, transitions, transforms, etc.) are last. If you are writing LESS or Sass, include (after one full line-break), your nested rules and pseudo elements last. In the case that a declaration contains the `content` property, include it first.

For a complete list of properties and their order, use [Recess][resource-recess].
```css
.declaration-order {

  content: '';

  /* Positioning */
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  /* Box Model */
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  align-items: center;
  float: left;
  width: 100px;
  height: 100px;

  /* Typography */
  font: 13px "Arial";
  color: #000;

  /* Visual */
  background: #fff;
  border: 1px solid;

  /* Functional */
  transition: 1s ease;

  /* Misc. LESS or Sass */
  &:hover { opacity: 0.5; }
  &:nth-of-type(2) { color: #555; }

}
```

#### Single Declarations
In the case where a rule includes on one declaration, remove line breaks for readability and faster editing. Include one space after the opening bracket and one before the closing bracket.
```css
.class-1 { opacity: 1; }
.class-2 { opacity: 0; }
```

Optionally, you could drop the semicolon, but this can be error-prone and is not suggested.
```css
.class-1 { opacity: 1 }
.class-2 { opacity: 0 }
```

#### Color Properties and Values
Always use either RGBA or RGB color values whenever possible. Write values in all lowercase with no space.
```css
color: rgba(72,74,76,1);
color: rgb(72,74,76);
```
When writing hex values, use all lowercase values, e.g., `#fff`, and shorthand whenever possible, e.g., `#fff` instead of `#ffffff`. If using LESS and Sass, always define variables for commonly used colors and write functions with no spaces, e.g., `fadeOut(@red,25%);`.
```css
@primary-grey: #555;
@primary-white: #fff;

color: @primary-white;
background: fadeOut(@primary-grey,50%);
```

#### Browser Prefixes
Use `-webkit-`, `-moz-`, `-ms-`, and `-o-`, in that order. Always also include an un-prefixed copy of the base property last and align the prefixed properties to the same column.
```css
-webkit-transform: ... ;
   -moz-transform: ... ;
    -ms-transform: ... ;
        transform: ... ;
```
To determine which properties require prefixes, refer to [caniuse][resource-caniuse-css]. If you use a taskrunner, [autoprefixer][resource-autoprefixer] is very useful, as is Lea Verou's pollyfill, [prefix-free][resource-prefixfree].

### Selectors
- Use class selectors and avoid ID selectors
- **Never** use the [universal selector](http://www.w3.org/TR/CSS21/selector.html#universal-selector)
- Avoid combined type selectors, also known as descendant selectors, e.g., `ul li a`
- Always group several selectors that share the same declarations together, e.g., `h1, h2, h3, h4, h5, h6`.
- Follow the W3 [specification on selectors](http://www.w3.org/TR/CSS21/selector.html)

#### Class Selectors
Unless a specific case requires otherwise, always use class selectors. Do not combine class selectors with type selectors, e.g., `h1.bold`; instead use `.heading-bold`.

#### ID Selectors
Avoid ID selectors and instead use class selectors. Never combine ID selectors with type selectors, e.g., `h1#primary`.

#### Type selectors
Avoid using lengthy type selectors, e.g., `ul li a`. Since browsers read selectors from right to left, not left to right as humans do, longer selectors can greatly impact performance.

#### Pseudo-elements and Pseudo-classes
When grouping pseudo-elements and classes with other selectors, include them last.
```css
a,
a:visited,
a:nth-of-type(2) { ... }
```
Always declare the pseudo elements `:before` first and `:after` second, but declare them after the element they affect. Include the `content` property first in the declaration.
```css
a { ... }
a:before { ... }
a:after {
  content: 'attr(href)';
  color: red;
  border: 1px solid;
}
```

When combining pseudo-classes, use two colons for the second class, e.g., `a:visited::hover`.

#### Link and Dynamic Pseudo-classes
Always declare rules for the selectors `:hover`, `:active`, `:focus`, `:visited`, respectively. The selector `:link` is optional, as the `a` type selector is equally as effective; only use `:link` and `:visited` on links.

## Notes on Code Robustness
An important part of both HTML and CSS code is how specific and robust it is. Some call this writing code as a "human-readable medium", but in the end, all text code is readable by humans. Everyone can *read* code, but only few can fully understand it.

> ...a representation of data or information that can be naturally read by humans
> <cite>Wikipedia: <a href=http://wikipedia.org/wiki/Human-readable_medium>Human-readable Medium</a></cite>

Rather than making code readable, focus on writing code in which a developer can understand its functions.

In order to write understandable code, it must be robust and set in a strong foundation. From that strong foundation, you can add a level of specification through class names and comments. This process is known as self-documenting code: source code that is that follows loosely defined conventions for naming and structure. These conventions allow for developers to effectively use the source code without previous knowledge of its specification, design, or behavior.

Good, extensive documentation is key to robust code. More often than not, extensive documentation cannot be expressed through just source code. While robust object-oriented class names and specific comments certainly do help, they should not be the only form of documentation.

#### Class Names
- Keep classes lowercase and use dashes (not underscore or camelCase). Dashes provide for readability and natural breaks in related classes, e.g., `.btn` and `.btn-danger`.
- Be specific and concise when naming classes. Use meaningful names that describe the action or functionality of a class rather than is appearance, e.g. `.btn-danger` instead of `.btn-red`.
- Abbreviate some class names, but make sure anyone can understand the class, e.g., `.btn` instead of `.button`.
- Prefix classes based on the closest parent element or base class.
- Always use a base class for elements with different states. If you have a success and a failure label, make the base class `.label` and the classes `.success` and `.warning` will give it the specific styles needed for different states.

```css
/* Unintuitive */
.u { ... }
.uContainer { ... }
.label_red { ... }

/* Magical */
.upload-item { ... }
.upload-item--container { ... }
.upload-label.warning { ... }
```

#### HTML Comments
In an HTML document with few lines of code, do not place comments by closing tags. In larger HTML documents, where there may be multiple closing tags of the same element include a comment containing a backslash and the class/ID name; this will help prevent human error in when making changes in development. If a description is necessary, include a colon and a short summary of element after the class/ID name. Generally, however, you should include descriptions in the stylesheet; long descriptions can diminish readability of HTML documents.
```html
<div class=header>
  <div class=example-div-1>
    <div class=example-div-2>
      ...
    </div><!-- /example-div-2 -->
  </div><!-- /example-div-1 -->
</div><!-- /header: Primary header for all pages-->
```

#### CSS Comments
Never simply reiterate a component or selector name. Always write short comments in the third person, present tense. Longer comments may be written in any person or tense.
```css
/* Bad </3 */
/* Page Header */
.page-header {
  ...
}

/* xD */
/* .page-header: Contains the primary header elements */
.page-header {
  ...
}
```

Both LESS and Sass allow in-line comments; use these to add notes after certain properties.
```scss
.example {
  @base: 25px;
  width: round((@base*2)/3.14); // => 16.0px
  background: #555; // background will match footer
}
```

Never feel limited to one line with comments; use as many lines as necessary to explain the function/purpose of a declaration.

Separate stylesheets into sections with three line-breaks and a comment. Within this comment include the title of the section and a brief description less than forty characters. If you prefix the title of the sections with a unique character not used anywhere else in the code, you can easily search for different sections, e.g. search for `$CONTENT-PAGE` and this will only result with the section title, no classes will be returned.
```css
...



/* ------------ -----------
  $SEARCH-PAGE
  All rules for the default search page
----------- ------------ */

.search-page--header {
  ...
}
```

## Appendix

### Inspiration
This document is inspired by my personal code style; [Code Guide][MDO], by @MDO; [CSS Guidelines][CSSWizardy], by @CSSWizardy; the Google [HTML and CSS Styleguide][Google-styleguide] and [Page Speed Guidelines][Google-speedguide]; and the [Github Styleguide][Github].

### Bibliography
- *Code Guide*, Mark Otto, [mdo.github.com/code-guide](http://mdo.github.com/code-guide)
- *CSS Guidelines*, Harry Roberts, [github.com/csswizardry/CSS-Guidelines](https://github.com/csswizardry/CSS-Guidelines)

All other infomation taken from an external source has been cited with a title and link to the original source document.

### Suggested Reading
- Jef Raskin: [Comments Are More Important Than Code](http://queue.acm.org/detial.cfm?id=1053354)

## Contribute
<p class=centered>
  Want to improve this document?
  <em>Make a pull-request<a href=https://github.com/pburtchaell/site-assemble/blob/master/tpl/pages/styleguide.md> on Github</a></em>.
</p>

[MDO]: http://mdo.github.com/code-guide
[CSSWizardy]: https://github.com/csswizardry/CSS-Guidelines
[Github]: https://github.com/styleguide
[Google-styleguide]: http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
[Google-speedguide]: http://feedthsbot.com/pagespeed/
