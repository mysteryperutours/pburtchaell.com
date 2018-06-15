import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import SiteNavigation from '../../components/SiteNavigation';
import Row from '../../components/Row';
import Column from '../../components/Column';
import './styles.css';

/*
 * Function: SiteHeader
 * Description: Renders the global website header
 */
const SiteHeader = ({ links, rowSize }) => (
  <header role="banner" className="site-header">
    <Row rowSize={rowSize}>
      <Column largeSize={3} smallSize={12}>
        <Link to="/" className="site-header__title">
          Patrick Burtchaell
        </Link>
      </Column>
      <Column largeSize={9} smallSize={12}>
        <SiteNavigation
          links={links}
          position="top"
        />
      </Column>
    </Row>
  </header>
);

SiteHeader.propTypes = {
  rowSize: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })).isRequired,
};

SiteHeader.defaultProps = {
  rowSize: 'large',
};

export default SiteHeader;
