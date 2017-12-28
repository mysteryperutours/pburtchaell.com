/**
 * Export the paths used in the application. Having one object with
 * all paths is useful as the application scales. I can easily reference all
 * paths in one place when using the Link component, for example.
 */
const paths = {
  INDEX: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  WORK_ITEM: '/work/:year/:title',
  NOT_FOUND: '*'
};

export default paths;
