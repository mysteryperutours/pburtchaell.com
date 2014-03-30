# [LESS](http://lesscss.org)

1. `browser` contains all browser specific code such as IE8 and IE9 fixes and special code for Webkit and Firefix e.g., `::selection` and the webkit scrollbars.

2. `fonts` contains all font files; I keep this in with the style sheet because it makes it easier to right the `url()` values in `@font-face` rules.

3. `pages` contains code only used on specific pages, e.g., the article page LESS is in `pages/article.less`.

4. `partials` conatins all core LESS code broken into easily understandable blocks. Just like CSS stylesheets are often broken into sections, I break my code into equally as many partials. This allows me to easily build custom stylesheets for each page. For example, let's say my primary style sheet has a ton of extra code that I am not using on one special page I am designing for my site. If I know this code is in 1 `x.less` and `y.less` partials, I can create a new stylesheet that imports all the partials I need (like my core partials: `typography.less` and `grid.less`), but not [x] and [y] partials, which I do not need. A real life example is my [404 page][1]. All I really need is the [grid][2], basic [typography][3] and a few other styles; using partials, it is very easy for me to make an `error.less` stylesheet and then `@import` the small amount of styles I needf for that one page.

5. `portfolio` is a special folder that contains code specific to special pages in my portfolio.

[1]: error.less
[2]: partial/grid.less
[3]: partial/typography.less
