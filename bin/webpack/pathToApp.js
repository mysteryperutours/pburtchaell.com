// @flow
import path from 'path';
import _ from 'lodash';

/**
 * @function pathToApp
 * @description Get the path to a folder within the application.
 * @returns {string} path
 */
const pathToApp: Function = _.partial(function () {
  return path.join(
    __dirname,
    '..',
    '..',
    path.join.apply(path, arguments)
  );
}, 'app');

export default pathToApp;
