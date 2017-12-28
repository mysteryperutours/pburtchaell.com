# pburtchaell.com

[![Build Status](https://travis-ci.org/pburtchaell/pburtchaell.com.svg?branch=master)](https://travis-ci.org/pburtchaell/pburtchaell.com) [![Coverage Status](https://coveralls.io/repos/github/pburtchaell/pburtchaell.com/badge.svg?branch=master)](https://coveralls.io/github/pburtchaell/pburtchaell.com?branch=master)

## Getting Started

1. Install dependencies with `npm install`, or if you use yarn, with `yarn`
2. Start the development server with `npm start`

Other scripts to know:

- Run tests and lint JavaScript: `npm test`
- Run tests in watch mode: `npm test -- --watch`
- Run Flow: `npm run flow`
- Update snapshots: `npm test -- -u`
- Generate code coverage report: `npm test -- --coverage`
- Build website: `npm run build`

## Development Stack

This website uses:

* **[React](https://facebook.github.io/react/)** for the user interface,
* **[WebPack 2](https://webpack.js.org/)** for module bundling,
* **[Jest](https://facebook.github.io/jest/)** for unit tests,
* **[Flow](https://flowtype.org/)** for static type checking,
* **[Babel](https://babeljs.io/)** for JS,
* **[PostCSS](https://github.com/css-modules/css-modules)** for CSS, and
* **[ESLint](http://eslint.org/)** for JS style rules.

I also have **[Travis CI](https://travis-ci.org/)** setup to run tests. **[Yarn](https://yarnpkg.com/)**, a dependency management tool, is used to help speed up CI tasks.

Finally, I write code in **[Atom Editor](https://atom.io/)** with the Flow and ESLint linter plugins installed. These plugins provide immediate inline feedback from tests.

This is largely based off the boilerplate I use for building static apps. The only difference here is I'm not using Redux. Since there isn't any "state" that needs to be shared between components, I don't find it necessary!

Certainly, I'm using a lot of tools to build a simple website. One reason for this is because I use my website as a playground for experimenting with and learning tools. Another reason is I would argue it does increase my development speed and productivity. These tools enable me to catch errors before I even compile my code, for example.

---
Copyright (c) 2016 Patrick Burtchaell. All rights reserved.
