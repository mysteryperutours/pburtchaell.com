import React from 'react';
import classNames from 'classnames';

let Month = React.createClass({

  getDefaultProps() {
    return {
      active: false
    };
  },

  render() {

    var classes = classNames('month', {
      'month-active': this.props.active === true
    });

    return (
      <li className={classes} data-avail={this.props.availability} data-month={this.props.name}></li>
    );

  }

});

export default Month;
