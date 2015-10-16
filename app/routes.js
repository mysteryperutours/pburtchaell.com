export default {
  path: '/',
  component: require('./views/app'),
  indexRoute: require('./views/home'),
  childRoutes: [
    //require('./views/writing'),
    require('./views/work'),
    //require('./views/admin'),
    require('./views/about'),
    require('./views/styleguide'),
    require('./views/error')
  ]
};
