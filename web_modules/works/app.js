/** @jsx React.DOM */

import React from 'react';
import Marty from 'marty';
import router from 'router';

// React configurations
React.initializeTouchEvents(true);

window.React = React; // for React developer tools
window.Marty = Marty; // for Marty developer tools

if (process.env.NODE_ENV === 'development') {
  console.clear();
}

/**
 * @function Router#run
 * @description Initialize the router.
 * @param {function}
 * @param {function} callback
 */
router.run(function (Handler, state) {
  React.render(<Handler {...state} />, document.querySelector('main'));
});
