import IndexRoute from './index';
import AboutRoute from './about';
import NotFoundRoute from './notFound';
import WorkItemRoute from './workItem';

/**
 * Export the router config object. Using an object instead of JSX for the
 * Router makes it easier to (1) understand routes on large apps and (2)
 * async load routes.
 */
const config = [
  IndexRoute,
  AboutRoute,
  WorkItemRoute,
  NotFoundRoute // This route must fall last in the config
];

export default config;
