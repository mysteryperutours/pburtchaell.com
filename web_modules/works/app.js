import React from 'react';
import router from 'works/router';

// React configurations
React.initializeTouchEvents(true);

window.React = React; // for React developer tools

//if (_DEVELOPMENT_) {
  console.clear();
//}

/**
 * @function Router#run
 * @description Initialize the router.
 * @param {function}
 * @param {function} callback
 */
router.run(function (Handler, state) {
  React.render(<Handler {...state} />, document.querySelector('main'));
});
