---
title: Sails.js and Heroku
description: A simple guide to deploying Sail.js, an MVC framework for Node.js, to Heroku.
date: 2015-03-04
post: true
keywords:
- node.js
- sails.js
- heroku
- deployment
---

Node.js &mdash;and consequently Sails.js&mdash; apps scale horizontally. It is a powerful and efficient approach, but it involves a bit of planning. At scale, you'll want to be able to copy your app onto multiple Heroku dynos, throw them behind a load balancer, and share one database. This guide will cover how to configure this stack for Heroku.

If you know your way around Heroku, there is [an abridged version](#tl-dr) of this guide. Otherwise, start here.

Prerequisites:

- Sails.js CLI installed
- Your Sails.js application
- A [Heroku account](http://heroku.com)
- The [Heroku Toolbelt](https://toolbelt.heroku.com/) installed

## Initial Heroku setup

First, create a new app using the Heroku toolbelt.

```
heroku create your-app-name
```

Next, create a Procfile, the file that Heroku uses to run instances.

```
touch Procfile
```

Edit the file using your text editor (I would suggest using `vim Procfile` so you can stay in the Terminal) to contain the command you use to start the app. In this case, it is `npm start`.

```
web: npm start
```

Lastly, in your `package.json` file, add the start script:

```
"scripts": {
  "start": "sails lift"
}
```

Now that you have your application created and Heroku knows how to run Sails, let's setup the database connections using Herok add-ons.

### Add-ons

One of the challenges of scaling an application is that a clustered deployment cannot share memory, since they are on physically different machines. That means that all session/socket processing and shared memory has to be offloaded to a shared, remote [Redis](http://redis.io/) database. Sails.js apps support Redis by default.

To use Redis with your application, add the nano [Redis-to-Go plan](https://addons.heroku.com/redistogo#nano).

```
heroku addons:add redistogo
```

Next, you will need to add a [MongoDB](https://addons.heroku.com/mongolab#sandbox) database hosted by MongoLab. This database will be used for storing data from your models. If you would prefer to use some other database, you can; Heroku supports PostgreSQL, MySQL and many other databases. This guide, however, will use Mongo.

```
heroku addons:add mongolab
```

Lastly, add [Logentries](https://addons.heroku.com/logentries#tryit) for log management.

```
heroku addons:add logentries
```

## Configuration

This guide will reference two forms of configuration:

1. Sails.js application configuration
2. Heroku environment/config variables

### Sails.js Application Configuration

There are four files that are important for deployment.

1. `config/env/production`
2. `config/connections`
3. `config/sockets`
4. `config/session`

The first file contains all the configuration for when the application is run with `NODE_ENV=production`, which is the default environment on Heroku. This will be where you tell Sails to use the connections to your Redis and Mongo add-ons.

The second file is an object containing all of the database local, sandbox/development and production database connections for your app. This file does not tell Sails "when" to use these connections, it just tells them that they exist.

The third and fourth files contain information on web socket and session databases, in our case this is Redis. Use these files to configure the connection to your Redis database(s).

### Heroku Config Variables

> A given codebase may have numerous deployments: a production site, a staging site, and any number of local environments maintained by each developer. The traditional approach for handling such config vars is to put them under source &mdash;in a properties file of some sort. A better solution is to use environment variables, and keep the keys out of the code. On a traditional host or working locally you can set environment vars in your bashrc. On Heroku, you use config vars.
> <cite>Heroku Documentation</cite>

When you are editing `config/connections` it might seem fine to add a new connection like so:

```
'production': {
  adapter: 'sails-mongo',
  url: mongodb://your-username:your-password@host:port
}
```

However, this, as the Heroku docs state, is "an error prone" process. It is a better practice to use config variables in your app instead.

```
'production': {
  adapter: 'sails-mongo',
  url: process.env.MONGOLAB_URI
}
```

For many Heroku add-ons, config variables will be created for you when you install the add-on. The MongoLab variable I used in the last example is created automatically and can be accessed from the Heroku web interface, or via the CLI.

```
heroku config:get MONGOLAB_URI
  => mongodb://your-username:your-password@host:port
```

You can set config variables using the CLI as well.

```
heroku config:set EVERYTHING_IS_AWESOME=true
```

In your code, this will return true.

```
console.log(process.env.EVERYTHING_IS_AWESOME);
  => true
```

If you want to list all variables, use `heroku config`.

Using this pattern, update your Sails.js configuration files to use variables for both the MongoLab and Redis-to-Go connections.

## TL;DR

A simple guide for the dev that knows their way around Heroku.

1. `heroku create your-app-name`
2. Add `sails lift` to the npm start script and `web: npm start` to Procfile.
3. `heroku addons:add redistogo`
4. `heroku addons:add mongolab`
5. `heroku addons:add logentries`
6. Follow the [configuration steps](#configuration).
7. `git push heroku master`
8. Live long and prosper.
