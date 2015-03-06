import React from 'react';
import { Route, NotFoundRoute, DefaultRoute, RouteHandler } from 'react-router';

/**
 * Import the route handlers (views) of the application.
 */
import index from 'works/views/index';
import projects from 'works/views/projects';
import signin from 'works/views/admin/signin';
import dashboard from 'works/views/admin/dashboard';
import error from 'works/views/error';

/**
 * @object Routes
 * @description The routes of the application.
 */
let Routes = (
  <Route name="app" path="/" handler={index}>
    <DefaultRoute handler={signin} />
    <Route name="dashboard" path="/admin" handler={dashboard} />
    <Route name="signin" path="/signin" handler={signin} />
    <Route name="projects" path="/projects" handler={projects} />
    <NotFoundRoute handler={error} />
  </Route>
);

export default Routes;
