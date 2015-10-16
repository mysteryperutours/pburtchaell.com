import * as types from '../constants/session';

/**
 * @function create
 * @description
 * @param {object} data The username and password
 */
export function create(data) {
  return {
    type: types.CREATE_SESSION,
    payload: {
      promise: () => null,
      onSuccess: () => null,
      onError: () => null
    }
  };
}

/**
 * @function
 * @description
 */
export function end() {
  return {
    type: types.END_SESSION,
    payload: {
      promise: () => null,
      onSuccess: () => null,
      onError: () => null
    }
  };
}
