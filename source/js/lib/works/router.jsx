/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

/**
 * @object views
 * @description The views of the application.
 */
var views = {
  index: require('./views/index'),
  projects: require('./views/projects'),
  admin: {
    signin: require('./views/admin/signin'),
    dashboard: require('./views/admin/dashboard')
  },
  error: require('./views/error')
};


/**
 * @object routes
 * @description The routes of the application
 */
Router.routes = (
  <Route name="app" path="/" handler={views.index}>
    <DefaultRoute handler={views.admin.signin} />
    <Route name="dashboard" path="/admin" handler={views.admin.dashboard} />
    <Route name="signin" path="/signin" handler={views.admin.signin} />
    <Route name="projects" path="/projects" handler={views.projects} />
    <NotFoundRoute handler={views.error} />
  </Route>
);

var router = Router.create({
  routes: Router.routes
});

module.exports = router;
