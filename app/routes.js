let routes = {
  component: require('./views/app'),
  childRoutes: [
    require('./views/home'),
    require('./views/writing'),
    require('./views/about'),
    require('./views/work')
  ]
};

export default routes;
