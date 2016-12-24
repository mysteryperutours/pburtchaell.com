import React from 'react';
import { render } from 'react-dom';
import { Router as AppRouter, browserHistory } from 'react-router';
import routes from './routes/config';

const MOUNT = document.getElementById('app-mount');

/**
 * @function renderApp
 * @description Renders the top level parents of the application, including
 * the Redux provider (providing context for components) and the router.
 */
const renderApp = (appRoutes: object, mount) => {
  render(
    <AppRouter
      routes={appRoutes}
      history={browserHistory}
    />,
    mount
  );
};

/**
 * Enable hot module replacement/reloading if in a development
 * environment. This will automatically update the application
 * when changes are made.
 */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes/config', () => {
    System.import('./routes/config').then((module) => {
      const newRoutes = module.default;
      renderApp(newRoutes, MOUNT);
    });
  });
}

// Render the initial app
renderApp(routes, MOUNT);
