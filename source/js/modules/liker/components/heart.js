/** @jsx React.DOM */

var React = require('react');

var Heart = React.createClass({

  clickHandler: function () {
    if (!this.props.clicked) { 
      this.increment();
    } else {
      this.decrement();
    }
  },

  increment: function () {

  },

  decrement: function () {

  },  

  render: function () {
    return (
      <div className="likes-heart">
        <object className="heart-object">
        </object>
      </div>
    )
  }

});

module.exports = Heart;
