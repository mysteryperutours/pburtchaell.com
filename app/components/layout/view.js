import { Component } from 'react';
import Header from 'components/core/header';
import Footer from 'components/core/footer';

class View extends Component {
  render() {
    return (
      <div className="view">
        {!this.props.header ? null : <Header {...this.props.header} />}
        <main role="main">
          {this.props.children}
        </main>
        {!this.props.footer ?  null : <Footer {...this.props.footer} />}
      </div>
    );
  }
};

View.propTypes = {

};

View.defaultProps = {
  header: true,
  footer: true
};

export default View;
