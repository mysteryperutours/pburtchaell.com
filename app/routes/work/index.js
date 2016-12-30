import paths from '../paths';

export default {
  path: paths.WORK,
  getComponent(nextState, callback) {
    System.import('./component').then((module) => {
      callback(null, module.default);
    });
  }
};
