# pburtchaell.com [![Build Status](https://travis-ci.org/pburtchaell/pburtchaell.com.svg?branch=master)](https://travis-ci.org/pburtchaell/pburtchaell.com) ![Dependencies](https://david-dm.org/pburtchaell/pburtchaell.com.png)

## Overview

My website serves as a (hopefully) helpful example of how to build a React application with React Router, Redux and WebPack. Instead of building yet another example application, I think it is useful to see how someone uses React for a production site. My site will demonstrate the following:

- Redux + React Router
- Maintaining an immutable state
- Functional programming techniques for JavaScript
- Next generation JavaScript programming techniques for JavaScript
- Sending async data requests to a REST API
- Preventing users from viewing certain routes if they are not signed in
- How to use Make + WebPack + Babel

## Getting Started

1. Install dependencies and build site: `npm install`
2. Run server and watch files for changes: `npm start`

## Development

- Build: `npm run build`
- Run tests: `npm test`

### Stack

My stack is very similar to what I use on an every day basis when programming JavaScript for web applications. I prefer to keep things as simple, yet efficient as possible.

- [React](https://facebook.github.io/react/): Declarative render model
- [React Router](https://github.com/rackt/react-router): Client side router
- [Redux](https://github.com/gaearon/redux): Predictable, omnidirectional state management
- [Immutable.js](https://github.com/facebook/immutable-js): Immutable data
- [Less](https://github.com/less/less.js)
- [WebPack](http://webpack.github.io/): Bundles JS, CSS, images and fonts
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

---
Built with care in New Orleans by [Patrick Burtchaell](http://twitter.com/pburtchaell)

[Copyright 2015 Patrick Burtchaell](LICENSE)
