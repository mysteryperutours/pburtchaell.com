export default {
  path: '/',
  component: require('./views/app').default,
  indexRoute: require('./views/home').default,
  childRoutes: [
    require('./views/about').default,
    require('./views/error').default
  ]
};
