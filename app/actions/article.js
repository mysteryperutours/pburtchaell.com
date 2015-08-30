import * as types from 'constants/article';
import * as utils from 'utils/data/article';

export function get(id) {
  return {
    types: [
      types.GET_ARTICLE_PENDING,
      types.GET_ARTICLE_FULFILLED,
      types.GET_ARTICLE_REJECTED
    ],
    payload: {
      promise: utils.getArticle(id)
    }
  };
}

export function getAll() {
  return {
    types: [
      types.GET_ARTICLE_COLLECTION_PENDING,
      types.GET_ARTICLE_COLLECTION_FULFILLED,
      types.GET_ARTICLE_COLLECTION_REJECTED
    ],
    payload: {
      promise: utils.getArticleCollection()
    }
  };
}

export function create(body) {
  return {
    types: [
      types.CREATE_ARTICLE_PENDING,
      types.CREATE_ARTICLE_FULFILLED,
      types.CREATE_ARTICLE_REJECTED
    ],
    payload: {
      promise: utils.createArticle(body)
    }
  };
}
