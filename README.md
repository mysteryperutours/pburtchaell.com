# pburtchaell.com [![Build Status](https://travis-ci.org/pburtchaell/pburtchaell.com.svg?branch=master)](https://travis-ci.org/pburtchaell/pburtchaell.com) ![Dependencies](https://david-dm.org/pburtchaell/pburtchaell.com.png)

This website uses React, React Router and WebPack.

## Getting Started

1. Install dependencies and build site: `npm install`
2. Run server and watch files for changes: `npm start`

## Development

- Build: `npm run build`
- Run tests: `npm test`
- Deploy to staging: `npm run deploy:staging`
- Deploy to production: `npm run deploy:production`

### Stack

My stack is very similar to what I use on an every day basis when programming JavaScript for web applications.

- [React](https://facebook.github.io/react/): Declarative render model
- [React Router](https://github.com/rackt/react-router): Client side router
- [Less](https://github.com/less/less.js)
- [WebPack](http://webpack.github.io/): Bundles JS, CSS, images and fonts
- [Gulp](http://gulpjs.com/): Publishes files to S3
- [npm](https://www.npmjs.com/): Dependencies
- [Babel](https://babeljs.io): Enables ES 2015 JavaScript
- [ESLint](http://eslint.org/)
- [Travis CI](https://travis-ci.org/)

### Previous Versions

I have maintained this website since 2013 and I have switched between several different stacks since then. The site has--however--has always been static and used JS as the primary language (the two static site generators I used were written in Node.js).

- [Version 1.1.0](https://github.com/pburtchaell/pburtchaell.com/releases/tag/1.1.0): Assemble + Grunt
- [Version 2.0.0](https://github.com/pburtchaell/pburtchaell.com/releases/tag/2.0.0) Metalsmith + Gulp

I switched away from using a static site generator because it was too much trouble to write a post, generate the entire site and then publish it to my S3 bucket along with any of the media I included in the article. I decided that it would be much easier for me to use a CMS. I tried using Ghost deployed to Heroku, but I do not like the limitations and I missed writing front end code.

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell)

[Copyright 2013-present Patrick Burtchaell](LICENSE)
