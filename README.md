# pburtchaell.com [![Build Status](https://travis-ci.org/pburtchaell/pburtchaell.com.svg?branch=master)](https://travis-ci.org/pburtchaell/pburtchaell.com) ![Dependencies](https://david-dm.org/pburtchaell/pburtchaell.com.png)

## Overview

My website is generated by [Assemble](http://assemble.io), a static website generator for node.js. Gulp is used to compile all JavaScript and stylesheets. In addition, gulp both provides a local webserver for development and handles deploying generated files to a bucket on Amazon Web Services S3, where the files are hosted.

## Getting Started

1. Install development tools: `npm install -g gulp`
2. Instal dependencies and build site: `npm install`

## Development 

- Run server and watch files for changes: `npm start`
- Run tests: `npm test`
- List available build tasks: `gulp help`

## Deployment 

Deployment to Amazon Web Services S3 is handled with a plug for gulp and an `.aws.yml` file locally stored on my machine. To deploy to the staging bucket, set the node `process.env.AWS` variable to `staging`. To deploy to the master/production bucket, set the variable to `master`. 

To deploy to the *staging.pburtchaell.com* bucket:

```
AWS=staging gulp deploy
```

To deploy to the *pburtchaell.com* bucket:

```
AWS=master gulp deploy
```

---
Built with care in New Orleans | Source [licensed MIT](LICENSE)

All content [copyright 2015 Patrick Burtchaell](LICENSE)
