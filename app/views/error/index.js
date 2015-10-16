export default {
  path: '*',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./view'))
    })
  },
  config: {
    header: {
      branding: true,
      navigation: false
    },
    footer: false
  }
};
