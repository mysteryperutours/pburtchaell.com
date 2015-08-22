import * as views from './views';

let routes = {
  component: views.App,
  childRoutes: [
    views.Home,
    views.Writing,
    views.About,
    views.Work
  ]
};

export default routes;
