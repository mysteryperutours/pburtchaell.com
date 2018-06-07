import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Row from '../../components/Row';
import Column from '../../components/Column';
import './styles.css';

/*
 * Function: SiteHeaderNavItem
 * Description:
 */
const SiteHeaderNavItem = ({ linkTo, label }) => (
  <Link to={linkTo} className="site__navigation--item">
    {label}
  </Link>
);

SiteHeaderNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

/*
 * Function: SiteHeader
 * Description: Renders the global header for the website
 */
const SiteHeader = ({ navigationItems, rowSize }) => (
  <header role="banner" className="site__header-container">
    <Row rowSize={rowSize}>
      <Column largeSize={3} smallSize={6}>
        <Link to="/" className="site__title">
          Patrick Burtchaell
        </Link>
      </Column>
      <Column largeSize={9} smallSize={6}>
        {navigationItems && (
          <nav className="site__navigation">
            {navigationItems.map(navigationItem => (
              <SiteHeaderNavItem
                key={navigationItem.label}
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
  })),
};

SiteHeader.defaultProps = {
  rowSize: 'large',
  navigationItems: [
    { label: 'Work', linkTo: '/work' },
    { label: 'Writing', linkTo: '/writing' },
  ]
};

export default SiteHeader;
