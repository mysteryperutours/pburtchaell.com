import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { App } from 'components/layout';
import { application } from 'actions';

@connect(state => ({
  application: state.application
}))
export default class AppView extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  handleMount = () => {
    let { dispatch } = this.context.store;

    //dispatch(application.applicationDidMount());
  }

  render() {
    return (
      <App onMount={this.handleMount}>
        {this.props.children}
      </App>
    );
  }
}
