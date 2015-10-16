import React, { Component } from 'react';
import store from './store';

class Writing extends Component {
  render() {
    return (
      <Provider store={store()}>
        {this.props.children}
      </Provider>
    );
  }
}
