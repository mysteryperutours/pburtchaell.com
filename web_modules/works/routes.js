import React from 'react';
import Router from 'react-router';

var {
  Route,
  NotFoundRoute,
  DefaultRoute,
  RouteHandler
} = Router;

/**
 * @object Handlers
 * @description The views of the application.
 */
var Handlers = {
  index: require('./views/index'),
  projects: require('./views/projects'),
  signin: require('./views/admin/signin'),
  dashboard: require('./views/admin/dashboard'),
  error: require('./views/error')
};

/**
 * @object Routes
 * @description The routes of the application
 */
let Routes = (
  <Route name="app" path="/" handler={Handlers.index}>
    <DefaultRoute handler={Handlers.signin} />
    <Route name="dashboard" path="/admin" handler={Handlers.dashboard} />
    <Route name="signin" path="/signin" handler={Handlers.signin} />
    <Route name="projects" path="/projects" handler={Handlers.projects} />
    <NotFoundRoute handler={Handlers.error} />
  </Route>
);

export default Routes;
