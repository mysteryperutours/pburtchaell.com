import paths from '../paths';

export default {
  path: paths.WORK_ITEM,
  getComponent(nextState, callback) {
    System.import('./component').then((module) => {
      callback(null, module.default);
    });
  }
};
