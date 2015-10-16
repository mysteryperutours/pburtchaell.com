import React, { Component, PropTypes } from 'react';
import { App } from 'components/layout';

export default class AppView extends Component {
  render() {
    return (
      <App onMount={() => null}>
        {this.props.children}
      </App>
    );
  }
}
