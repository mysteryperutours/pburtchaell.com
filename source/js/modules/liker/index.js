/** @jsx React.DOM */

var React = require('react');
var Liker = require('./components/liker.js');

var render = React.render(
  <Liker />,
  document.querySelector('#liker'),
  function () {
    console.log('react started')
  }
);

module.exports = liker;
