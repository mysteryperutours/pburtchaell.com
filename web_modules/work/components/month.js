import React from 'react';
import classes from 'react-classes';

let Month = React.createClass({

  mixins: [classes],

  getDefaultProps() {
    return {
      active: false
    };
  },

  render() {

    var classes = this.getClass('month', {
      'month-active': this.props.active === true
    });

    return (
      <li className={classes} data-avail={this.props.availability} data-month={this.props.name}></li>
    );

  }

});

export default Month;
