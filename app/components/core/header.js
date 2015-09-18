import React, { Component } from 'react';
import { Link } from 'react-router';
import Branding from 'components/core/branding';
import pureRender from 'utils/pureRender';

export default pureRender(class Header extends Component {
  static defaultProps = {
    className: '',
    branding: true,
    navigation: true
  }

  render() {
    return (
      <header className={`page-header ${this.props.className}`}>
        <div className="row">
          <div className="col col-l-2 col-s-12">
            {this.props.branding ? (
              <Link to="/" activeClassName="active">
                <Branding />
              </Link>
            ) : null}
          </div>
          <div className="col col-l-10 col-s-12">
            {this.props.navigation ? (
              <nav className='page-navigation' role='navigation'>
                <ul className='navigation-items'>
                  <li className='navigation-item'>
                    <Link
                      to="/"
                      className="navigation-item-link"
                    >
                      Home
                    </Link>
                  </li>
                  <li className='navigation-item'>
                    <Link
                      to="/about"
                      className="navigation-item-link"
                      activeClassName="is-active"
                    >
                      About
                    </Link>
                  </li>
                  <li className='navigation-item'>
                    <Link
                      to="/posts"
                      className="navigation-item-link"
                      activeClassName="is-active"
                    >
                      Writing
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
});
