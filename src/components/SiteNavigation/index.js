import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './styles.css';

/*
 * Function: NavigationItemLink
 * Description: Renters a link in the website navigation
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
  position: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default NavigationLink;
