/** @jsx React.DOM */

var React = require('react');

var Footer = React.createClass({

  _show: function () {
    var el = document.querySelector('.page-footer');
    el.classList.toggle('active');
  },

  getDefaultProps: function () {
    return {
      date: new Date().getFullYear()
    }
  },

  render: function() {
    return (
      <footer className="page-footer" onMouseEnter={this._show} onMouseLeave={this._show}>

        <div className="row">
          <div className="col col-l-4">
          <h6>Contact</h6>
          <small>Patrick Burtchaell</small>
          <a>patrick@pburtchaell.com</a>
          <a>@pburtchaell</a>
          </div>
          <div className="col col-l-4">
          <h6>Info</h6>
          <a>Writing</a>
          <a>Blog</a>
          </div>
          <div className="col col-l-4">
            <h6>Foo</h6>
            <hr />
          </div>
        </div>

        <small>
          <span className="page-footer-span">
            Made with&nbsp;<object className="page-footer-heart">
            <svg x="0" y="0" width="10px" height="10px" viewBox="0 0 10 8">
              <path d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z"></path>
            </svg></object>&nbsp;in New Orleans<br/>
          </span>
          <div className="page-footer-legal">
            &copy;{this.props.date}
            &nbsp;&mdash;Patrick Burtchaell&mdash;
            <a href="/colophon" rel="source" title="Colophon" class="line no-color">Colophon</a>
          </div>
        </small>

      </footer>
    );
  }

});

module.exports = Footer;
