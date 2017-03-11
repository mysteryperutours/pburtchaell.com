import paths from '../paths';

export default {
  path: paths.WORK_ITEM,
  config: {
    defaultTheme: false,
    header: {
      type: 'transparent',
      isInterpolated: true
    },
    footer: {
      backgroundColor: '#E6E6E6',
      linkBackTo: {
        link: paths.WORK,
        title: 'All Work'
      },
      linkBackToTop: true
    }
  },
  getComponent(nextState, callback) {
    System.import('./component').then((module) => {
      callback(null, module.default);
    });
  }
};
