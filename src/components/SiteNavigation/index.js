import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './styles.css';

/*
 * Function: NavigationItemLink
 * Description: Renders a link in the website navigation
 */
const NavigationLink = ({ linkTo, label, position }) => (
  <Link
    to={linkTo}
    className={`site-navigation__item site-navigation__item-position-${position}`}
    activeClassName="site-navigation__item-state-active"
  >
    {label}
  </Link>
);

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']).isRequired,
};

/*
 * Function: NavigationItemLink
 * Description: Renders an array of navigation links
 */
const SiteNavigation = ({ links, position }) => {
  const element = links ? (
    <nav className="site-navigation">
      {links.map(({ label, linkTo }) => (
        <NavigationLink
          key={label}
          label={label}
          linkTo={linkTo}
          position={position}
        />
      ))}
    </nav>
  ) : null;

  return element;
};

SiteNavigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })).isRequired,
  position: PropTypes.oneOf(['top', 'bottom']).isRequired,
};

export default SiteNavigation;
