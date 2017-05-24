import React, { Element, Component } from 'react';
import { NavLink } from 'react-router-dom';
import Row from '../../components/row';
import paths from '../../routes/paths';
import './styles.css';

/**
 * @function RouteHeader
 * @description
 */
class RouteHeader extends Component {
  constructor(props) {
    super(props);
  }

  render(): Element<*> {
    const navigationItems = [{
      key: 0,
      label: 'Home',
      linkTo: paths.INDEX
    }, {
      key: 1,
      label: 'About',
      linkTo: paths.ABOUT
    },
    {
      key: 2,
      label: 'Work',
      linkTo: paths.WORK
    }];

    return (
      <header
        role="banner"
        className="site-header"
      >
        <Row size="large">
          <nav
            role="navigation"
            className="site-navigation"
          >
            {navigationItems.map(item => (
              <NavLink
                key={item.key}
                to={item.linkTo}
                exact={(item.linkTo === paths.INDEX)}
                className="site-navigation-item"
                activeClassName="is-active"
              >
                <span className="site-navigation-item-text">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>
        </Row>
      </header>
    );
  }
}

export default RouteHeader;
