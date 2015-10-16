import * as types from '../constants/article';
import * as utils from 'utils/server/resources/article';

/**
 * @function get
 * @description Load a single article from the API.
 * @param {string} id The ID of the article.
 */
export function get(id) {
  return {
    type: types.GET_ARTICLE,
    payload: {
      promise: utils.getArticle(id),
      onSuccess: () => null,
      onError: () => null
    }
  };
}
