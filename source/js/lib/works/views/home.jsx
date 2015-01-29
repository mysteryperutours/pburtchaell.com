/** @jsx React.DOM */

var React = require('react');

var HomeView = React.createClass({

  getInitialState: function () {
    return {
      title: 'Patrick Burtchaell',
      subtitle: 'Designer & developer from New Orleans'
    };
  },

  render: function() {
    return (
     <div>
      <main className="portfolio-view">
        <section className="portfolio-hero"> 
          <hgroup className="portfolio-hero-hgroup">
            <h1 className="portfolio-hero-title">{this.state.title}</h1>
            <h2 className="portfolio-hero-subtitle">{this.state.subtitle}</h2>
            <a href="" className="portfolio-hero-link" onClick={this._scroll}>Work with me</a>
            <object className="portfolio-branding">
              <svg version="1.1" x="0px" y="0px" width="1031.8px" height="763.7px" viewBox="0 0 1031.8 763.7">
              <g>
                <path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M527.1,510.9l252,252l252-252l-252-252L527.1,510.9z M779.1,575.4
                  l-64.4-64.4l64.4-64.4l64.4,64.4L779.1,575.4z"/>
                <path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M264,252.7l252,252l252-252L516,0.7L264,252.7z M516,317.2
                  l-64.4-64.4l64.4-64.4l64.4,64.4L516,317.2z"/>
                <path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M0.7,510.9l252,252l252-252l-252-252L0.7,510.9z M252.7,575.4
                  l-64.4-64.4l64.4-64.4l64.4,64.4L252.7,575.4z"/>
              </g>
              </svg>
            </object>
          </hgroup>
        </section>
        <section className="portfolio-section">
          <div className="row row-large">
            <div className="col col-l-12">
              <header className="portfolio-section-header">
                <h1 className="portfolio-section-title">This is a section</h1>
                <small className="portfolio-section-description">And this is a description, yo. They should be really short.</small>
                <hr />
                <p>I am a designer and web developer from New Orleans, Louisiana with a passion for withing with teams to build succcessful, user friendly products for the web, native applications or print.</p>
                <p>I currently attend the Loyola University New Orleans honors program for design with a minor in computer science. I will graduate from Loyola in May 2018. Before attending Loyola, I attended the New Orleans Center for Creative Arts for Media Arts.</p>
                <p>I also work for <a href="http://joinpeach.com" className="line">Peach</a> as a junior front end web developer.</p>
              </header>
            </div>
          </div>
        </section>
      </main>
    </div>
    )
  }

});

module.exports = HomeView;
