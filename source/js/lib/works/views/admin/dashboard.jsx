/** @jsx React.DOM */

var React = require('react');

var DashboardView = React.createClass({
  render: function() {
    return (
      <div className="row">
        <form className="col col-l-12">
          <h1>New Project</h1>
          <input placeholder="Name"/>
          <input placeholder="Date"/>
          <input placeholder="Type"/>
          <input placeholder="Image"/>
          <input type="file"/>
        </form>
      </div>
    )
  }
});

module.exports = DashboardView;
