import React, { Element } from 'react';
import Row from '../../components/row';
import Column from '../../components/column';
import styles from './styles.css';

// The footer for each route
const RouteFooter = (): Element => (
  <footer
    role="contentinfo"
    className={styles.routeFooter}
  >
    <Row>
      <Column size={12}>
        <small>
          <div className={styles.routeFooterHeart}>
            made with
            <object>
              <svg x="0" y="0" width="11px" height="11px" viewBox="0 0 10 8">
                <path
                  d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z"
                />
              </svg>
            </object>
          </div>
          <div>
            {`${String.fromCharCode(169)} 2013-${new Date().getFullYear()}`}
          </div>
        </small>
      </Column>
    </Row>
  </footer>
);

export default RouteFooter;
