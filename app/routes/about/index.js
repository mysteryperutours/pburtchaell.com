import paths from '../paths';

export default {
  path: paths.ABOUT,
  config: {
    footer: {
      linkBackTo: {
        link: paths.INDEX,
        title: 'Home'
      }
    }
  },
  getComponent(nextState, callback) {
    System.import('./component').then((module) => {
      callback(null, module.default);
    });
  }
};
