import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as AppRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import routes from './routes/config';

const MOUNT = document.getElementById('app-mount');

/**
 * @function renderApp
 * @description Renders the top level parents of the application, including
 * the Redux provider (providing context for components) and the router.
 */
const renderApp = (appRoutes: object, mount) => {
  render(
    <AppRouter>
      <App>
        <Switch>
          {appRoutes.map((route, i) => (
            <RouteWithChildren
              key={i}
              {...route}
            />
          ))}
        </Switch>
      </App>
    </AppRouter>,
    mount
  );
};

/**
 * @function RouteWithSubRoutes
 * @description Renders a route that can have children routes.
 * @returns {function} A React element
 *
 * Ref: https://reacttraining.com/react-router/web/example/route-config
 */
const RouteWithChildren = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        <route.component
          {...props}
          {...route.props}
          routes={route.routes} // pass the children routes down to keep nesting
        />
      )}
    />
  );
}


/**
 * Enable hot module replacement/reloading if in a development
 * environment. This will automatically update the application
 * when changes are made.
 */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes/config', () => {
    System.import('./routes/config').then((module) => {
      const newRoutes = module.default;
      renderApp(newRoutes, MOUNT);
    });
  });
}

// Render the initial app
renderApp(routes, MOUNT);
