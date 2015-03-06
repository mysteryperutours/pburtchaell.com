import 'works/init';
import React from 'react';
import Router from 'react-router';
import Routes from 'works/routes';
import Flux from 'works/flux';

// Create the Flux architecture instance
let flux = new Flux();

/**
 * @function Router#run
 * @description Initialize the router.
 */
Router.run(Routes, Router.HistoryLocation, (Handler, state) => {
  function render() {
    React.withContext(
      { flux }, // pass the flux instance in as context
      () => React.render(<Handler/>, document.querySelector('main'))
    );
  }
  render();
});
