import React, { Component } from 'react';
import Header from 'components/core/header';
import Footer from 'components/core/footer';

export default class View extends Component {
  static defaultProps = {
    header: true,
    footer: true
  }

  render() {
    return (
      <div className="view">
        {this.props.header !== false ? <Header {...this.props.header} /> : null}
        <main role="main">
          {this.props.children}
        </main>
        {this.props.footer !== false ? <Footer {...this.props.footer} /> : null}
      </div>
    );
  }
};
