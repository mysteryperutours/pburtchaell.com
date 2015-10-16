
[Google-styleguide]: http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
[Google-speedguide]: http://feedthsbot.com/pagespeed

[LESS]: http://lesscss.org
[Sass]: http://sass-lang.com
[W3-CSS-Spec]: http://www.w3.org/style/CSS/specs.en.html
[W3-HTML-Spec]: http://www.w3.org/html/wg/drafts/html/master/Overview.html

[resource-autoprefixer]: https://github.com/ai/autoprefixer
[resource-caniuse-css]: http://caniuse.com/#cats=CSS
[resource-caniuse-html]: http://caniuse.com/#cats=HTML5
[resource-prefixfree]: https://github.com/LeaVerou/prefixfree
[resource-recess]: http://twitter.github.io/recess
[resource-thesassway]: http://thesassway.com

## General Standards

1. Use soft tabs with two spaces.
2. Nested elements should be indented once.
3. Include one space after the colon for each declaration.
4. Each declaration should be written on its own line and indented once.
5. End each declaration with a semicolon.

### Importing Stylesheets

Never use the native CSS `@import` method. As stylesheets can only load one at a time in HTTP, this method will result in longer load times.

### Inline Styles

Avoid using inline styles in situations where a stylesheet could be used instead.

```html
<style>
  ...
</style>
```

### Style Attribute

To prioritize CSS delivery, avoid using the style attribute on elements. It is appropriate in some cases, such as using inline styles with a JavaScript library like React, but otherwise, avoid the style attribute.

```html
<span style="background-color:#fff; color:#555;"></span>
```

### Declarations, properties, and values

- Avoid specifying units for zero values, e.g., use `margin: 0;` instead of `margin: 0px`;
- Use shorthand whenever possible, e.g., `font` instead of `font-size` and `font-family`.
- Use `!important` when necessary, but avoid repeated use.
- Use single quotes and never double quotes.
- Stay consistent with units, e.g., do not use a mixture of REM and PX for typography, only use one or the other.
- Do not include a line-break after related declarations.
- Separate all declarations with one line-break.

```css
.foo {
  font: normal 12px 'Arial';
  margin: 0 5px 5px 0;
}

.bar {
  ...
}

.baz {
  ...
}
```

### Dry Declarations

Dry code can mean two things:

1. Less actual code, meaning smaller file sizes, less for the user to have to download, more efficient code, etc.
1. Less to have to maintain; not repeating yourself means that you can make fewer changes to your codebase.

When writing CSS, it is preferable to "dry out" the declaration blocks that are most likely to change, even if that does result in more lines of code at the end. This means writing code that avoids repetition.

For example, let's say we need to style a box with different colored borders on the top and bottom. There are two ways to think about the styles for this box:

1. The box has a solid one pixel wide border; the border color on the top is red and the border color on the bottom is blue.
2. The box has a solid one pixel wide red border on the top and the box has a solid one pixel wide blue border on the bottom.

The code for the first way of thinking would look like this:

```css
.foo {
  border-width: 1px 0;
  border-style: solid;
  border-top-color: red;
  border-bottom-color: blue;
}
```

The code for the second way of thinking would look like this:

```css
.foo {
  border-top: 1px solid red;
  border-bottom: 1px solid blue;
}
```

In the first example, the code for the width and style cascades. One can change the colors or either border without effecting the width or style. In the second example, there is repetition: the values `1px` and `solid` are used twice. If you ever want to change the border style on box, you have to change these values in two places. This is of course not a big deal on a small example like this, but if you extrapolate this example and then you have have issues with maintainability across the entire system.

### Declaration Order

Start from the outside and work into the declaration. In other words, start with the position &amp; box model and end with functional properties such as `transistion` and `animation`. Group related properties in the following order:

1. Positioning
2. Box model
3. Flexible box layout properties, e.g., `flex`
3. Typographic
4. Visual, e.g., `opacity`, `filter` or `visibility`
5. Functional
6. Pseudo-elements/classes (Less, Sass, etc.)
7. Nested rulesets (Less, Sass, etc.)

Because it declares the nature of an element, positioning comes first. The box model comes next as it dictates the dimensions and placement of an element. Typography and visual declaration declarations take place on the "inside" of the element and generally do not affect the "outside". Functional declarations (animations, transitions, transforms, etc.) are last. If you are writing LESS or Sass, include (after one full line-break), your nested rules and pseudo elements last. In the case that a declaration contains the `content` property, include it first.

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
  filter: grayscale(100%);
  opacity: .5;
  background: #fff;
  border: 1px solid;

  /* Functional */
  transition: 1s ease;

  /* Misc. */
  &:hover {
    opacity: .5;
  }

  &:nth-of-type(2) {
    color: #555;
  }

  .nested-declaration {
    ...
  }

}
```

### Single Declarations

In the case where a rule includes on one declaration, remove line breaks for readability and faster editing. Include one space after the opening bracket and one before the closing bracket.

```css
.class-1 { opacity: 1; }
.class-2 { opacity: 0; }
```

Optionally, you could drop the semicolon, but this can accidentally cause errors if you add a second property and forget to add back the semicolon.

```css
.class-1 { opacity: 1 }
.class-2 { opacity: 0 }
```

### Color Properties and Values

Use consistent color values whenever possible and avoid switching between hex, RGB, RGBA, and HSL color values. Write values in all lowercase with one space between values.

```css
color: rgb(72, 74, 76);
```

### Browser Prefixes

Do not include browser prefixes in your code. As the features browsers support change often, it is in your best interest to use a build tool to add prefixes for you. [autoprefixer][resource-autoprefixer] is the most popular choice.

### Selectors

- Use class selectors, e.g., `.classname`
- Never use ID selectors, e.g., `#id`
- Never use the universal selector, e.g., `*`
- Avoid combined type selectors, also known as descendant selectors, e.g., `ul li a`
- Always group several selectors that share the same declarations together, e.g., `h1, h2, h3, h4, h5, h6`.

### Class Selectors

Unless a specific case requires otherwise, always use class selectors. Do not combine class selectors with type selectors, e.g., `h1.bold`; instead use `.heading-bold`.

### ID Selectors

ID selectors are a valid method for styling unique components of a page, but they can cause [a number of unexpected issues](http://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class/) with reusability and specificity. Thus, I would suggest a blanket ban for selectors.

IDs do not need to be removed entirely howveer. They are useful for fragment identifiers, e.g., the "Back to Top" or

### Type selectors

Avoid using lengthy type selectors, e.g., `ul li a`. Since browsers parse the DOM pairing selectors from right to left, not left to right as humans read them, long selectors can  impact performance.

### Pseudo-elements and Pseudo-classes

When grouping pseudo-elements and classes with other selectors, include them last.
```css
a,
a:visited,
a:nth-of-type(2) {
  ...
}
```

Always declare the pseudo elements `:before` first and `:after` second, but declare them after the element they affect. Include the `content` property first in the declaration.

```css
a {
  ...
}
a:before {
  ...
}
a:after {
  content: 'attr(href)';
  color: red;
  border: 1px solid;
}
```

When combining pseudo-classes, use two colons for the second class, e.g., `a:visited::hover`.

### Link and Dynamic Pseudo-classes

Always declare rules for the selectors `:hover`, `:active`, `:focus`, `:visited`, respectively. The selector `:link` is optional, as the `a` type selector is equally as effective; only use `:link` and `:visited` on links.

### Comments

Generally speaking, avoid comments in your HTML unless it is absolutely necessary and truly adds clarification to your code. You should try to keep your comments within CSS or JS.

### CSS Comments

Never feel limited with comments; use as many lines as necessary to explain the purpose of a declaration.

Do not separate stylesheets into sections with line-breaks/comment. If you feel that a collection of declarations need to be separated, then the best solution is to create a new module for those declarations and `@import` it.

For example, I often break my typography styles into many modules. While some modules might only have around 20 to 30 lines of code, I know exactly what those modules contain. When you revisit a project after a few months, you will apprieciate this transparency.

```
@import 'modules/typography/headings';
@import 'modules/typography/anchors';
@import 'modules/typography/lists';
```

## CSS Preprocessors

CSS preprocessors add variables, nesting, functions, and mixins to your stylesheets. Both Sass and LESS are arguably as powerful as the other. This document uses Less syntax for examples, but Sass is very similar. Follow the same style-guide rules for both.

Always write Sass and Less with only on the first letters capitalized.

### Variables

Write local variables just as you would a CSS declaration, but include variables first.

```scss
.example {
  @base: 20px;
  height: @base;
  width: @base;
  margin: @base/2;
}
```

Write global variables just as you would a CSS declaration, but include one line break between related variables. It is helpful for maintainability to prefix related variables with a common name.

Remember that variables can also be called before they are declared, e.g., you could use the variable `@color` on line one even though it is not declared until line ten.

```scss
@font-color: #000;
@font-size: 1rem;
@font-style: normal;
@font-primary: 'Open Sans';
@font-secondary: 'Merriweather';
@font-stack: 'Helvetica', 'Arial', sans-serif;

@base-border: .25rem solid;
@base-border-radius: .125rem;
```

### @import

Do not include the file extension.

```scss
@import `utils/variables';
```

### Nesting

Avoid nesting for the sake of it.

```scss
/* Bad */
.container {
  ul {
    li {
      a {
        &:hover {
          ...
        }
      }
    }
  }
}
```

While it might be a convenience write nested selectors, it is an anti-pattern resulting in inefficient selectors after the code is compiled to CSS.

```scss
/* Compiled code */
.container { ... }
.container ul { ... }
.container ul li { ... }
.container ul li a:hover { ... }
```
