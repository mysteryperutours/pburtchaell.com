import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import NavigationLink from '../../components/SiteNavigation';
import Row from '../../components/Row';
import Column from '../../components/Column';
import './styles.css';

/*
 * Function: SiteHeader
 * Description: Renders the global website header
 */
const SiteHeader = ({ navigationItems, rowSize }) => (
  <header role="banner" className="site-header">
    <Row rowSize={rowSize}>
      <Column largeSize={3} smallSize={6}>
        <Link to="/" className="site-header__title">
          Patrick Burtchaell
        </Link>
      </Column>
      <Column largeSize={9} smallSize={6}>
        {navigationItems && (
          <nav className="site-navigation">
            {navigationItems.map(navigationItem => (
              <NavigationLink
                key={navigationItem.label}
                position="top"
                label={navigationItem.label}
                linkTo={navigationItem.linkTo}
              />
            ))}
          </nav>
        )}
      </Column>
    </Row>
  </header>
);

SiteHeader.propTypes = {
  rowSize: PropTypes.string.isRequired,
  navigationItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })).isRequired,
};

SiteHeader.defaultProps = {
  rowSize: 'large',
};

export default SiteHeader;
