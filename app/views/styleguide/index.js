export default {
  path: 'styleguide',
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
