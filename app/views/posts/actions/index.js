import Network from '../../utils/network/network';

const network = Network();

/**
 * @funcyion getMediumPosts
 * @description Hit the Twitter API and get the latest tweets.
 * @returns {promise}
 */
export const getTweets = () => network
  .get('');

/**
 * @funcyion getMediumPosts
 * @description Hit the Medium API and get the latest posts.
 * @returns {promise}
 */
export const getMediumPosts = () => network
  .get('');

/**
 * @function getWriting
 * @description
 */
export const getWriting = () => Promise.all([
  getMediumPosts(),
  getTweets()
]);
