import React from 'react';
import Flux from 'works/flux';
import Container from 'flummox/component';
import Header from 'works/components/header';
import Footer from 'works/components/footer';

var View = React.createClass({

  getDefaultProps() {
    return {
      header: true, // show the header
      footer: false // hide the footer
    };
  },

  render() {
    return (
      <div className="view">
        <Container flux={flux} connectToStores={['session']}>
          {this.renderHeader()}
          {this.renderMain()}
          {this.renderFooter()}
        </Container>
      </div>
    );
  },

  renderHeader() {
    return (
      <Header display={this.props.header}/>
    );
  },

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
  },

  renderFooter() {
    return (
      <Footer display={this.props.footer}/>
    );
  }

});

export default View;