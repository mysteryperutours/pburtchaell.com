import 'babel-polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import UniversalRouter from 'universal-router';
import Application from './components/application';
import Html from './components/html';
import routes from './routes';

// Development port and host are defined in package.json.
const port = process.env.PORT || process.env.npm_package_config_PORT;
const host = process.env.HOST || process.env.npm_package_config_HOST;

// Use all vendor prefixes if the user agent is unknown.
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

const app = express();

// Register middleware for all environments.
//app.use(express.static(path.join(__dirname, 'public')));

// Register middleware for development environment.
if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var configPath = path.join(__dirname, '../bin/webpack/development');
  var config = require(configPath).default;
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Render universal JavaScript.
app.get('*', async (req, res, next) => {
  try {
    const route = await UniversalRouter.resolve(routes, {
      path: req.path,
      query: req.query
    });

    // The top-level application component.
    const application = ReactDOMServer.renderToString(
      <Application
        children={route.component}
      />
    )

    // The top-level HTML component sent as the body of the HTTP response.
    const html = ReactDOMServer.renderToStaticMarkup(
      <Html
        children={application}
      />
    );

    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (error) {
    next(error);
  }
});

// Handle errors.
app.use((error, req, res, next) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={error.message}
      children={error.message}
    />
  );

  res.status(error.status || 500);
  res.send(`<!doctype html>${html}`);
});

// Launch the server.
app.listen(port, host, error => {
  if (error) throw error;
  console.log('server running at http://%s:%d', host, port);
});
