import React, { Element, Component } from 'react';
import { NavLink } from 'react-router-dom';
import Row from '../../components/row';
import Column from '../../components/column';
import RouteHeaderHire from '../../components/routeHeaderHire';
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
      label: 'Work',
      linkTo: paths.INDEX
    }, {
      key: 1,
      label: 'Profile',
      linkTo: paths.ABOUT
    }];

    return (
      <header
        role="banner"
        className="site-header"
      >
        <Row size="large">
          <Column largeSize="8" smallSize="8">
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
          </Column>
          <Column largeSize="4" smallSize="4">
            <RouteHeaderHire />
          </Column>
        </Row>
      </header>
    );
  }
}

export default RouteHeader;
