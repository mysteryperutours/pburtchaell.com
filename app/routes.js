import * as views from './views';

let routes = {
  component: views.App,
  childRoutes: [
    views.Home,
    views.Admin,
    views.Work,
    views.Portfolio,
    views.Writing
  ]
};

export default routes;
