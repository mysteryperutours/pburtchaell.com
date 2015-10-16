export default {
  path: '/admin',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./app'))
    })
  },
  indexRoute: require('./views/index'),
  childRoutes: [
    require('./views/new')
  ],
  config: {
    header: {
      branding: true,
      navigation: false
    },
    footer: false
  }
};
