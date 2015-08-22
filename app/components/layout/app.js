import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    return(
      <div className="body-wrapper">
        {this.props.children}
      </div>
    );
  }
}
