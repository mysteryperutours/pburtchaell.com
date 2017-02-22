import paths from '../paths';

export default {
  path: paths.WORK_ITEM,
  config: {
    footer: {
      linkBackTo: {
        link: paths.WORK,
        title: 'All Work'
      }
    }
  },
  getComponent(nextState, callback) {
    System.import('./component').then((module) => {
      callback(null, module.default);
    });
  }
};
