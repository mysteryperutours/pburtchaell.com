import 'babel-core/polyfill';
import 'core-js/modules/es6.reflect';
import React from 'react';
import Router from 'react-router';
import flux from './flux';
import routes from './routes';
import './styles/styles.less';

/**
 * @description Create a new router with HTML5 history and
 * render the application.
 * @returns React#Render
 */
Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(<Handler flux={flux} />, document.body);
});
