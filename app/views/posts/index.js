import './styles';

export default {
  path: '/posts',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./view').default)
    })
  }
};
