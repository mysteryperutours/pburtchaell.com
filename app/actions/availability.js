import * as types from 'constants/availability';

export function get(id) {
  return {
    types: [
      types.GET_AVAILABILITY_PENDING,
      types.GET_AVAILABILITY_FULFILLED,
      types.GET_AVAILABILITY_REJECTED
    ],
    promise: () => null
  };
}
