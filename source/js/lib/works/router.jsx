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
  error: require('./views/error'),
  home: require('./views/home'),
  admin: {
    index: require('./views/admin/index')
  }
};

/**
 * @object routes
 * @description The routes of the application
 */
Router.routes = (
  <Route name="app" path="/" handler={views.index}>
    <DefaultRoute handler={views.home}/>
    <NotFoundRoute handler={views.error}/>
  </Route>
);

var router = Router.create({
  routes: Router.routes
});

module.exports = router;
