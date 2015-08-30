import React from 'react';

/**
 * @class Month
 * @description A month in the availability class.
 */
export default class Month extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    active: true,
  }

  static propTypes = {
    active: React.PropTypes.bool.isRequired,
  }

  getClassName = () => {
    if (!this.props.active) {
      return 'month';
    } else {
      return 'month month-active';
    }
  }

  render() {
    return (
      <li className={this.getClassName()} data-avail={this.props.availability} data-month={this.props.name}></li>
    );
  }
}
