/** @jsx React.DOM */

var React = require('react');

var Counter = React.createClass({

  defaultProps: function () {
    return {
      value: 0,
      label: 'likes'
    }
  },

  render: function () {
    return (
      <div className="likes-counter">
        <span className="counter-value">{this.props.value}</span>
        <span className="counter-label">{this.props.label}</span>
      </div>
    )
  }
  
});

module.exports = Counter;
