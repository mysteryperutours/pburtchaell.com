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
 * Function: SiteFooter
 * Description: Renders the global footer for the website
 */
const SiteFooter = ({ rowSize }) => {
  // Get a random message to render next to the heart
  const messageIndex = Math.floor(Math.random() * FOOTER_MESSAGES.length);
  const message = FOOTER_MESSAGES[messageIndex];

  // Get the (c) copyright symbol and the current year
  const copyrightSymbol = String.fromCharCode(169);
  const copyrightDate = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="site-footer">
      <Row rowSize={rowSize}>
        <Column largeSize={12} smallSize={12}>
          <div className="site-footer__message">
            <small>
              {message}
            </small>
            <object className="site-footer__heart">
              <svg x="0" y="0" width="10px" height="10px" viewBox="0 0 10 8">
                <path
                  d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5,
                  0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z"
                />
              </svg>
            </object>
          </div>
          <div className="site-footer__copyright">
            <small>
              <span className="site-footer__copyright-symbol">{copyrightSymbol}</span>
              <span>2013-{copyrightDate} &middot; <a href="/rss.xml">RSS</a></span>
            </small>
          </div>
        </Column>
      </Row>
    </footer>
  );
};

SiteFooter.propTypes = {
  rowSize: PropTypes.string,
};

SiteFooter.defaultProps = {
  rowSize: 'large',
};

export default SiteFooter;
