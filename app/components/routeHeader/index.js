import React, { Element } from 'react';
import Column from '../../components/column';
import Row from '../../components/row';
import Text from '../text';
import paths from '../../routes/paths';
import styles from './styles.css';

/**
 * @function RouteHeader
 * @description
 */
const RouteHeader = (): Element => {
  const navigationItems = [{
    key: 0,
    label: 'Home',
    linkTo: paths.INDEX
  }, {
    key: 1,
    label: 'About',
    linkTo: paths.ABOUT
  },
  {
    key: 2,
    label: 'Work',
    linkTo: paths.WORK
  }];

  return (
    <header
      role="banner"
      className={styles.viewHeader}
    >
      <Row>
        <Column size={12}>
          <nav
            role="navigation"
            className={styles.viewNavigation}
          >
            {navigationItems.map(item => (
              <Text
                key={item.key}
                linkTo={item.linkTo}
                style={{
                  fontSize: '3rem',
                  lineHeight: '3rem',
                  top: '2px'
                }}
              >
                {item.label}
              </Text>
            ))}
          </nav>
        </Column>
      </Row>
    </header>
  );
};

export default RouteHeader;
