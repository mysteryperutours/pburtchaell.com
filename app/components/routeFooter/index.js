import React, { Element } from 'react';
import { Link } from 'react-router-dom';
import Row from '../../components/row';
import Column from '../../components/column';
import googleAnalyticsEvents from '../../support/googleAnalyticsEvents';
import googleAnalyticsCategories from '../../support/googleAnalyticsCategories';
import './styles.css';

type Props = {
  linkTo?: {
    path: string,
    title: string
  },
  linkToTop?: boolean
}

// The footer for each route
const RouteFooter = (props: Props): Element => {
  const messages = [
    'Made With',
    'Take Care',
    'Have Fun Today',
    'Have a Great Day',
    'It is a Wonderful World',
    'You are Awesome'
  ];

  // The message rendered next to the heart
  const message = messages[Math.floor(Math.random() * messages.length)];

  // The copyright notice rendered under the message and heart
  const copyrightDate = `${String.fromCharCode(169)} ${new Date().getFullYear()}`;

  // The column size changes depending on how many links are rendered
  const smallColumnSize = props.linkToTop ? 6 : 12;

  return (
    <footer
      role="contentinfo"
      className="route-footer"
    >
      <Row size="large">
        <Column largeSize={4} smallSize={6}>
          {props.linkTo ? (
            <div className="route-footer-link">
              <small>
                <Link
                  className="route-footer-link-anchor"
                  to={props.linkTo.path}
                  onClick={() => ga(
                    'send',
                    'event',
                    googleAnalyticsCategories.LINKS,
                    googleAnalyticsEvents.FOOTER_BACK_TO_PAGE_LINK
                  )}
                >
                  Back to {props.linkTo.title}
                </Link>
              </small>
            </div>
          ) : null}
        </Column>
        <Column largeSize={4} hideOnSmall={true}>
          {props.linkToTop ? (
            <div className="route-footer-top-link">
              <small>
                <a
                  href="#"
                  className="route-footer-top-link-anchor"
                  onClick={() => {
                    window.scrollTo(0, 0)

                    ga(
                      'send',
                      'event',
                      googleAnalyticsCategories.LINKS,
                      googleAnalyticsEvents.FOOTER_BACK_TO_TOP_LINK
                    );
                  }}
                >
                  Back to Top
                </a>
              </small>
            </div>
          ) : null}
        </Column>
        <Column
          className="route-footer-column"
          largeSize={4}
          smallSize={smallColumnSize}
        >
          <div className="route-footer-text-message">
            <small>
              {message}
            </small>
            <object className="route-footer-heart">
              <svg x="0" y="0" width="10px" height="10px" viewBox="0 0 10 8">
                <path
                  d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z"
                />
              </svg>
            </object>
          </div>
          <div className="route-footer-text-copyright">
            <small>
              {copyrightDate} Patrick Burtchaell
            </small>
          </div>
        </Column>
      </Row>
    </footer>
  );
};

RouteFooter.defaultProps = {
  linkTo: null,
  linkToTop: false
};

export default RouteFooter;
