import paths from '../paths';
import NotFoundRoute from './component';

export default {

  // Because this route uses a wildcard, make sure it is last in the router
  path: paths.NOT_FOUND,
  props: {
    // Props to pass down to component
  },
  component: NotFoundRoute
};
