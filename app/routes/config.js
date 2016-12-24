import App from '../components/app';
import IndexRoute from './index';
import AboutRoute from './about';
import NotFoundRoute from './notFound';
import paths from './paths';

/**
 * Export the router config object. Using an object instead of JSX for the
 * Router makes it easier to (1) understand routes on large apps and (2)
 * async load routes.
 */
const config = {
  path: paths.INDEX,
  component: App,
  indexRoute: IndexRoute,
  childRoutes: [
    AboutRoute,
    NotFoundRoute // This route must fall last in the config
  ]
};

export default config;
