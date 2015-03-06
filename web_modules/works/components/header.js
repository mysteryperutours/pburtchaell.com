import React from 'react';
import Router from 'react-router';

let {
  Route,
  Link
} = Router;

let Header = React.createClass({

  render() {
    return (
      <header className="page-header header-absolute">
        <Link to="app">
          <object className="branding">
            <svg x="0px" y="0px" viewBox="12.5 12.5 50 50">
              <g id="branding-audio">
                <path d="M50.5,55.9l-12-12l12-12l12,12L50.5,55.9zM39,43.9l11.5,11.5L62,43.9L50.5,32.3L39,43.9z M50.5,47.1l-3.3-3.3l3.3-3.3l3.3,3.3L50.5,47.1zM47.7,43.9l2.8,2.8l2.8-2.8l-2.8-2.8L47.7,43.9z"/>
              </g>
              <g id="branding-video">
                <path d="M37.5,43.1l-12-12l12-12l12,12L37.5,43.1zM26,31.1l11.5,11.5L49,31.1L37.5,19.6L26,31.1z M37.5,34.4l-3.3-3.3l3.3-3.3l3.3,3.3L37.5,34.4zM34.7,31.1l2.8,2.8l2.8-2.8l-2.8-2.8L34.7,31.1z"/>
              </g>
              <g id="branding-design">
                <path d="M24.5,55.9l-12-12l12-12l12,12L24.5,55.9zM13,43.9l11.5,11.5L36,43.9L24.5,32.3L13,43.9z M24.5,47.1l-3.3-3.3l3.3-3.3l3.3,3.3L24.5,47.1zM21.7,43.9l2.8,2.8l2.8-2.8l-2.8-2.8L21.7,43.9z"/>
              </g>
            </svg>
          </object>
        </Link>
      </header>
    );
  }

});

export default Header;
