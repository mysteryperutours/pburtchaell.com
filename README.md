# pburtchaell.com [![Build Status](https://travis-ci.org/pburtchaell/pburtchaell.com.svg?branch=master)](https://travis-ci.org/pburtchaell/pburtchaell.com) ![Dependencies](https://david-dm.org/pburtchaell/pburtchaell.com.png)

## Overview

My website serves as a (hopefully) helpful example of how to build a React application with React Router, Redux and WebPack. Instead of building yet another example application, I think it is useful to see how someone uses React for a production site. My site will demonstrate the following:

- Redux + React Router
- Maintaining an immutable state
- Functional programming techniques for JavaScript
- Next generation JavaScript programming techniques for JavaScript
- Sending async data requests to a REST API ([Parse](https://www.parse.com))
- Preventing users from viewing certain routes if they are not signed in
- How to use Make + WebPack + Babel

## Getting Started

1. Install dependencies and build site: `npm install`
2. Run server and watch files for changes: `npm start`

## Development

- Build: `npm run build`
- Run tests: `npm test`
- Deploy to staging: `npm run deploy:staging`
- Deploy to production: `npm run deploy:production`

### Stack

My stack is very similar to what I use on an every day basis when programming JavaScript for web applications. I prefer to keep things as simple, yet efficient as possible.

- [React](https://facebook.github.io/react/): Declarative render model
- [React Router](https://github.com/rackt/react-router): Client side router
- [Redux](https://github.com/gaearon/redux): Predictable, omnidirectional state management
- [Immutable.js](https://github.com/facebook/immutable-js): Immutable data
- [Less](https://github.com/less/less.js)
- [WebPack](http://webpack.github.io/): Bundles JS, CSS, images and fonts
- [Gulp](http://gulpjs.com/): Publishes files to S3
- [npm](https://www.npmjs.com/): Manages front-end dependencies and development dependencies
- [Babel](https://babeljs.io): Enables ES 2015 JavaScript
- [ESLint](http://eslint.org/)
- [Travis CI](https://travis-ci.org/)
- [Parse](http://parse.com): Free REST API for storing data

### Architecture

```
.
├── app
│   ├── actions         # Redux actions
│   ├── components      # "Dumb" React components
│   ├── constants       # Redux action types
│   ├── images          # Image files imported by WebPack
│   ├── middleware      # Router and dispatcher middleware
│   ├── reducers        # Redux reducers
│   ├── styles          # CSS styles imported by WebPack
│   ├── utils           # Utility functions
│   ├── views           # "Smart" React components
│   ├── client.js       # The client-side application entry point
│   ├── router.js       # Router config
│   ├── routes.js       # Routes config
│   ├── store.js        # The redux store
│   └── template.html   # HTML template used by WebPack for bundling
```

### Previous Versions

I have maintained this website since 2013 and I have switched between several different stacks since then. The site has--however--has always been static and used JS as the primary language (the two static site generators I used were written in Node.js).

- [Version 1.1.0](https://github.com/pburtchaell/pburtchaell.com/releases/tag/1.1.0): Assemble + Grunt
- [Version 2.0.0](https://github.com/pburtchaell/pburtchaell.com/releases/tag/2.0.0) Metalsmith + Gulp

I switched away from using a static site generator because it was too much trouble to write a post, generate the entire site and then publish it to my S3 bucket along with any of the media I included in the article. I decided that it would be much easier for me to use a CMS. I tried using Ghost deployed to Heroku, but I do not like the limitations and I missed writing front end code.

In the end, I found a hybrid approach would work best. Right now, my front end site is completely static and uses the [Parse REST API](https://www.parse.com) to create and fetch data, e.g., my posts and design work. I am not finished with this setup, but it is what I am working toward now.

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell)

[Copyright 2013-present Patrick Burtchaell](LICENSE)
