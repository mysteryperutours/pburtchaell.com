import * as types from 'constants/article';

const initialState = {};

export default function article(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ARTICLE_PENDING:
      return state;

    case types.CREATE_ARTICLE_FULFILLED:
      return state;

    case types.CREATE_ARTICLE_REJECTED:
      return state;

    case types.GET_ARTICLE_PENDING:
      return state;

    case types.GET_ARTICLE_FULFILLED:
      return state;

    case types.GET_ARTICLE_REJECTED:
      return state;

    default:
      return state;
  }
}
