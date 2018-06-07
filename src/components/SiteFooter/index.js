import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Row from '../../components/Row';
import Column from '../../components/Column';
import './styles.css';

const FOOTER_MESSAGES = [
  'Made With',
  'Have Fun Today',
  'It\'s a Wonderful World',
  'You\'re Awesome',
  'Make Great Things',
  'Do Good',
];

/*
 * Function: SiteFooterLinkTo
 * Description: Renders a link that brings you to a different page
 */
const SiteFooterLinkTo = ({ hidden, linkTo, linkToLabel }) => {
  if (hidden) {
    return null;
  }
  return (
    <div className="route-footer-link">
      <small>
        <Link
          className="route-footer-link-anchor"
          to={linkTo}
        >
          Back to {linkToLabel}
        </Link>
      </small>
    </div>
  );
};

SiteFooterLinkTo.propTypes = {
  hidden: PropTypes.bool.isRequired,
  linkTo: PropTypes.string,
  linkToLabel: PropTypes.string,
};

/*
 * Function: SiteFooterLinkToTop
 * Description: Renders a link that brings you to the top of the page
 * UX tips: https://www.nngroup.com/articles/back-to-top/
 */
const SiteFooterLinkToTop = ({ hidden }) => {
  if (hidden) {
    return null;
  }
  return (
    <div className="route-footer-top-link">
      <small>
        <a
          href="#"
          className="route-footer-top-link-anchor"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to Top
        </a>
      </small>
    </div>
  );
};

SiteFooterLinkToTop.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

/*
 * Function: SiteFooter
 * Description: Renders the global footer for the website
 */
const SiteFooter = (props) => {
  // Get a random message to render next to the heart
  const messageIndex = Math.floor(Math.random() * FOOTER_MESSAGES.length);
  const message = FOOTER_MESSAGES[messageIndex];

  // Get the (c) copyright symbol and the current year
  const copyrightSymbol = String.fromCharCode(169);
  const copyrightDate = new Date().getFullYear();

  const copyrightSymbolStyle = {
    fontSize: 10,
    lineHeight: '18px',
    paddingRight: '2px',
    display: 'inline-block',
    position: 'relative',
    top: -2,
  };

  const {
    rowSize,
    linkTo,
    linkToLabel,
    linkToTop,
  } = props;

  return (
    <footer role="contentinfo" className="route__footer">
      <Row rowSize={rowSize}>
        <Column largeSize={4} smallSize={12}>
          <SiteFooterLinkTo
            hidden={typeof linkTo !== 'string'}
            linkTo={linkTo}
            linkToLabel={linkToLabel}
          />
        </Column>
        <Column largeSize={4} smallSize={12}>
          <SiteFooterLinkToTop
            hidden={!linkToTop}
          />
        </Column>
        <Column largeSize={4} smallSize={12}>
          <div className="route__footer__text">
            <small className="small-inline">
              {message}
            </small>
            <object className="route__footer__heart">
              <svg x="0" y="0" width="10px" height="10px" viewBox="0 0 10 8">
                <path
                  d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z"
                />
              </svg>
            </object>
          </div>
          <div className="route__footer__text">
            <small className="small-inline">
              <span style={copyrightSymbolStyle}>{copyrightSymbol}</span>
              2013-{copyrightDate} &middot; <a href="/rss.xml">RSS</a>
            </small>
          </div>
        </Column>
      </Row>
    </footer>
  );
};

SiteFooter.propTypes = {
  rowSize: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  linkToLabel: PropTypes.string,
  linkToTop: PropTypes.bool.isRequired,
};

SiteFooter.defaultProps = {
  linkToTop: false,
  linkTo: null,
  linkToLabel: null,
  rowSize: 'large',
};

export default SiteFooter;
