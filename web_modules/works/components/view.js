import React from 'react';
import Container from 'flummox/component';
import Header from 'works/components/header';
import Footer from 'works/components/footer';

export default class View extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="view">
        {this.renderHeader()}
        {this.renderMain()}
        {this.renderFooter()}
      </div>
    );
  }

  renderHeader() {
    return (
      <Header display={this.props.header}/>
    );
  }

  renderMain() {
    return (
      <main className="portfolio-view">
        <section className="portfolio-section">
          <div className="row row-full-width">
            <div className="col col-l-12">
              {this.props.children}
            </div>
          </div>
        </section>
      </main>
    );
  }

  renderFooter() {
    return (
      <Footer display={this.props.footer}/>
    );
  }

}

View.propTypes = {
  header: React.PropTypes.bool,
  footer: React.PropTypes.bool
};

View.defaultProps = {
  header: true, // show the header
  footer: false // hide the footer
};
