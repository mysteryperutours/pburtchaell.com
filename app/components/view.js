import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

/**
 * @class View
 * @description A view (page) in the application.
 */
export default class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header isDark={this.props.isHeaderDark} />
        <main role="main">
          {this.props.children}
        </main>
        <Footer isDark={this.props.isFooterDark} />
      </div>
    );
  }
};
