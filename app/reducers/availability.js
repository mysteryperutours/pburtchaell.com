import * as types from 'constants/availability';

const initialState = {};

export default function availability(state = initialState, action) {
  switch (action.type) {
    case types.GET_AVAILABILITY_PENDING:
      return state;

    case types.GET_AVAILABILITY_FULFILLED:
      return state;

    case types.GET_AVAILABILITY_REJECTED:
      return state;

    default:
      return state;
  }
}
