import React, { Component } from 'react';

export default class View extends Component {
  render() {
    return (
      <main role="main">
        {this.props.children}
      </main>
    );
  }
};
