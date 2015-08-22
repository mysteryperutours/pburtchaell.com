import React, { Component } from 'react';
import Header from 'components/core/header';
import Footer from 'components/core/footer';

export default class View extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.headerTheme} />
        <main role="main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
};
