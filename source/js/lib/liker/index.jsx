/** @jsx React.DOM */

var React = require('react');
var Liker = require('./components/liker.js');

module.exports = React.render(
  <Liker />,
  document.querySelector('#liker'),
  function () {
    if (development) {
      console.log('Liker module initialized.');
    }
  }
);
