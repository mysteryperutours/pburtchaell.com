/**
 * Export the paths used in the application. Having one object with
 * all paths is useful as the application scales. I can easily reference all
 * paths in one place when using the Link component, for example.
 */
const paths = {
  INDEX: '/',
  ABOUT: '/about',
  WORK: '/work',
  WORK_ITEM: '/work/:year/:month/:title',
  NOT_FOUND: '*'
};

export default paths;
