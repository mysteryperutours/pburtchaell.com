import paths from '../paths';

export default {

  // Because this route uses a wildcard, make sure it is last in the router
  path: paths.NOT_FOUND,
  getComponent(nextState, callback) {
    System.import('./component').then((module) => {
      callback(null, module.default);
    });
  }
};
