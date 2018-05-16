[home]: https://pburtchaell.com
[react]: https://reactjs.org/
[react-router]: https://reacttraining.com/react-router/
[redux]: http://redux.js.org/
[gatsby]: https://www.gatsbyjs.org/
[netlify-cms]: https://www.netlifycms.org/
[npm]: http://npmjs.org/
[yarn]: https://yarnpkg.com/en/
[eslint]: https://eslint.org/
[din]: https://typekit.com/fonts/din-2014

# pburtchaell.com

[pburtchaell.com][home] is my personal website and portfolio.

## Getting Started

1. Install: `npm ci`
2. Create an `.env` file with a `GITHUB_ACCESS_TOKEN`
3. Develop: `npm run develop`
4. Build: `npm run build`

Other:

- Lint JS code style: `npm run lint`
- Fix JS code style: `npm run prettify`

## Colophon

### Typography

- [DIN 2014 from Adobe Typekit][din]

### Tools & Libraries

- [React][react]: JavaScript library for building user interfaces
- [Gatsby][gatsby]: static site generator for React
- [Yarn][yarn]: JavaScript package manager (works with [npm][npm])
- [ESLint][eslint]: JavaScript and JSX code style, following the [Airbnb Style Guide](https://github.com/airbnb/javascript)
- [Netlify CMS][netlify-cms]: static site host, CMS, and DNS

### Gatsby

[Gatsby][gatsby] is an open source static site generator. Under the hood, it uses libraries like [React][react], [React Router][react-router] and [Redux][redux].

Here's a break down of how files are organized:

```
src
├── assets      # Static files like images/videos
├── components  # React components used by pages/layouts/templates
├── content     # Static files like Markdown, YAML or JSONy
├── html.js     # HTML template used by Gatsby
├── layouts     # React components used by Gatsby to wrap pages in a specific layout
├── pages       # React components rendered by Gatsby as individual pages (e.g., a custom "About" page)
├── styles      # CSS styles
└── templates   # React components used by Gatsby to render Markdown pages
```

### Netlify

[Netlify CMS][netlify-cms] is a quick, easy and lightweight content management system that works well with Markdown files.

### Gatsby Plugins

- [gatsby-link][1]: enables React Router with enhancements for Gatsby
- [gatsby-plugin-netlify][2]: generates redirect and header files for Netlify
- [gatsby-plugin-netlify-cms][3]: generates admin backend files for Netlify
- [gatsby-plugin-react-helmet][4]: generates document head for Gatsby pages
- [gatsby-plugin-react-next][5]: enables the latest version of React
- [gatsby-plugin-sharp][6]: exposes methods from [Sharp](https://github.com/lovell/sharp)
- [gatsby-remark-images][7]: processes images in Markdown
- [gatsby-remark-smartypants][8]: enables improved Markdown typography
- [gatsby-source-filesystem][9]: enables Gatsby to load files off the disk
- [gatsby-transformer-remark][10]: transforms Markdown files to HTML
- [gatsby-transformer-sharp][11]: processes images with Sharp
- [gatsby-remark-prismjs][12]: enables Markdown code highlighting

[1]: https://www.npmjs.com/package/gatsby-link
[2]: https://www.npmjs.com/package/gatsby-plugin-netlify
[3]: https://www.npmjs.com/package/gatsby-plugin-netlify-cms
[4]: https://www.npmjs.com/package/gatsby-plugin-react-helmet
[5]: https://www.npmjs.com/package/gatsby-plugin-react-next
[6]: https://www.npmjs.com/package/gatsby-plugin-sharp
[7]: https://www.npmjs.com/package/gatsby-remark-images
[8]: https://www.npmjs.com/package/gatsby-remark-smartypants
[9]: https://www.npmjs.com/package/gatsby-source-filesystem
[10]: https://www.npmjs.com/package/gatsby-transformer-remark
[11]: https://www.npmjs.com/package/gatsby-transformer-sharp
[12]: https://www.npmjs.com/package/gatsby-remark-prismjs

### Reference

These resources were helpful reference in starting with Gatsby:

- [Gatsby Netlify starter project][12]
- [Netlify CMS example project][13]

[12]: https://github.com/AustinGreen/gatsby-starter-netlify-cms
[13]: https://github.com/netlify/netlify-cms/example

### Thanks

Thanks to [Hunter Caron](https://github.com/huntercaron) for open sourcing [Boiled](https://github.com/huntercaron/boiled), the Gatsby boilerplate my website is based off.

## License

Copyright (c) 2013-2018 Patrick Burtchaell.

[Code licensed with the MIT License (MIT)](/CODE-LICENSE).

[Content not licensed](/CONTENT-LICENSE).
