/** @jsx React.DOM */

var React = require('react');
var Marty = require('marty')
var router = require('./router');

// React configurations
React.initializeTouchEvents(true);

window.React = React; // for React developer tools
window.Marty = Marty; // for Marty developer tools

/**
 * @function Router#run
 * @description Initialize the router.
 * @param {function} 
 * @param {function} callback
 */
router.run(function (Handler, state) {
  React.render(<Handler {...state} />, document.querySelector('main'));
});
