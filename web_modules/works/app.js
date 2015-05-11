import 'works/init';
import React from 'react';
import Router from 'react-router';
import Routes from 'works/routes';
import Data from 'works/data';
import Flux from 'works/flux';

var flux = new Flux();

/**
 * @function Router#run
 * @description Initialize the router.
 */
Router.run(Routes, (Handler, state) => {

  function render() {

    React.withContext(
      { flux }, // pass flux, data and auth in as context*/
      () => React.render(<Handler />, document.querySelector('main'))
    );

  }

  render();

});
