export default {
  path: '/work',
  component: require('./view'),
  childRoutes: [
    require('./children/lawnchair'),
    require('./children/loyola'),
    require('./children/oa'),
    require('./children/peach'),
    require('./children/personal'),
    require('./children/scouter'),
    require('./children/segment')
  ],
  config: {
    header: false,
    footer: false
  }
};
