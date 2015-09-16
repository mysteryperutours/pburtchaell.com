import * as types from 'constants/article';

const initialState = {
  isPending: true,
  isFulfilled: false,
  isRejected: false,
  articles: []
};

export default function article(state = initialState, action) {
  switch (action.type) {
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
