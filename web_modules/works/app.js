import React from 'react';
import Router from 'works/router';
import Routes from 'works/routes';
import Flux from 'works/flux';
import 'babel/polyfill';

// React configurations
React.initializeTouchEvents(true);

// React developer tools
window.React = React;

// Create the Flux architecture instance
let flux = new Flux();

/**
 * @function Router#run
 * @description Initialize the router.
 */
Router.run(Routes, Router.HistoryLocation, (Handler, state) => {

  async function run() {
    React.withContext(
      { flux }, // pass the flux instance in as context
      () => React.render(<Handler/>, document.querySelector('main'))
    );
  }

  // catch any errors
  run().catch(error => {
    throw error;
  });

});
