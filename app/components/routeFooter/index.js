import React, { Element } from 'react';
import { Link } from 'react-router';
import Row from '../../components/row';
import Column from '../../components/column';
import styles from './styles.less';

type Props = {
  linkBackTo?: {
    link: string,
    title: string
  },
  linkBackToTop?: boolean
}

// The footer for each route
const RouteFooter = (props: Props): Element => {
  const sayings = [
    'ship',
    'made with',
    'this is',
    'no hate'
  ];

  return (
    <footer
      role="contentinfo"
      className={styles.routeFooter}
    >
      <Row defaultColumn={false}>
        <Column largeSize={4} smallSize={props.linkBackToTop ? 6 : 12}>
          {props.linkBackTo ? (
            <div className={styles.routeFooterBackLink}>
              <small>
                <Link to={props.linkBackTo.link}>
                  Back to {props.linkBackTo.title}
                </Link>
              </small>
            </div>
          ) : null}
        </Column>
        <Column largeSize={4} smallSize={6}>
          {props.linkBackToTop ? (
            <div className={styles.routeFooterBackToTopLink}>
              <small>
                <div
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Back to Top
                </div>
              </small>
            </div>
          ) : null}
        </Column>
        <Column largeSize={4} smallSize={12}>
          <div className={styles.routeFooterHeart}>
            <small>
              {sayings[Math.floor(Math.random() * sayings.length)]}
              <object>
                <svg x="0" y="0" width="11px" height="11px" viewBox="0 0 10 8">
                  <path
                    d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z"
                  />
                </svg>
              </object>
              <br/>{`${String.fromCharCode(169)} ${new Date().getFullYear()}`}
            </small>
          </div>
        </Column>
      </Row>
    </footer>
  );
};

export default RouteFooter;
