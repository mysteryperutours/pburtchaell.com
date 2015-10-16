export default {
  path: '/work',
  component: require('./view'),
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require('./children/lawnchair'),
        require('./children/loyola'),
        require('./children/oa'),
        require('./children/personal'),
        require('./children/scouter'),
        require('./children/segment')
      ])
    })
  },
  config: {
    header: false,
    footer: false
  }
};
