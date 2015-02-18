import React from 'react';

let Month = React.createClass({
  render() {
    return (
       <li className="month" data-avail={this.props.availability} data-month={this.props.name}></li>
    );
  }
});

export default Month;
