import React from 'react';
import ReactDOM, { render } from 'react-dom';
import UniversalRouter from 'universal-router';
import Application from './components/application';

let routes = require('./routes').default;

/**
 * @global APP_CONTAINER
 * @description The DOM node that will contain the application.
 */
const APP_CONTAINER = document.getElementById('app');

/**
 * @global APP_CONTEXT
 * @description The context for the application.
 */
const APP_CONTEXT = {};

/**
 * Handle HMR for routes.
 */
if (module.hot) {
  module.hot.accept('./routes', () => {
    routes = require('./routes').default;
  });
};

/**
 * @function onLocationChange
 * @param location
 * @description
 */
async function onLocationChange(location) {
  const route = await UniversalRouter.resolve(APP_ROUTES, {
    path: location.pathname,
    query: queryString.parse(location.search),
  });

  render(
    <Application
      context={APP_CONTEXT}
      children={route.component}
    />,
    APP_CONTAINER
  );
}
