export default {
  path: '/work',
  component: require('./view').default,
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require('./children/lawnchair').default,
        require('./children/loyola').default,
        require('./children/oa').default,
        require('./children/scouter').default,
        require('./children/segment').default
      ])
    })
  },
  config: {
    header: false,
    footer: false
  }
};
