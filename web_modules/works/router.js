import React from 'react';
import Router from 'react-router';

let {
  Route,
  NotFoundRoute,
  DefaultRoute,
  RouteHandler,
  Link
} = Router;

/**
 * @object views
 * @description The views of the application.
 */
let views = {
  index: require('./views/index'),
  projects: require('./views/projects'),
  signin: require('./views/admin/signin'),
  dashboard: require('./views/admin/dashboard')
  error: require('./views/error')
};

/**
 * @object routes
 * @description The routes of the application
 */
Router.routes = (
  <Route name="app" path="/" handler={views.index}>
    <DefaultRoute handler={views.admin.signin} />
    <Route name="dashboard" path="/admin" handler={views.dashboard} />
    <Route name="signin" path="/signin" handler={views.signin} />
    <Route name="projects" path="/projects" handler={views.projects} />
    <NotFoundRoute handler={views.error} />
  </Route>
);

let router = Router.create({
  routes: Router.routes
});

export default router;
