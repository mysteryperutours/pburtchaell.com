import React, { createElement } from 'react';
import { Router } from 'react-router';
import store from './store';

export default function renderRoutes(history) {

  // When the route changes, dispatch that information to the store.
  //history.addChangeListener(() => store.dispatch(routeLocationDidUpdate(location)));

  return (
    <Router
      routes={require('./routes')}
      history={history}
      createElement={createElement}
    />
  );
}
