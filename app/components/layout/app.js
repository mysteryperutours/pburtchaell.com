import React, { Component } from 'react';
import Header from 'components/core/header';
import Footer from 'components/core/footer';

export default class App extends Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    return(
      <div className="body-wrapper">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
