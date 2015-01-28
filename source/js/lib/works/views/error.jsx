/** @jsx React.DOM */

var React = require('react');

var ErrorView = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Error</h1>
      </div>
    )
  }
});

module.exports = ErrorView;
