import React, { Element } from 'react';
import Row from '../../components/row';
import Text from '../text';
import paths from '../../routes/paths';
import styles from './styles.less';

function getClassName(props): string {
  const classNames = [styles.viewHeader];

  if (props.align === 'left') classNames.push([styles.viewHeaderAlignLeft]);

  return classNames.join(' ');
}

/**
 * @function RouteHeader
 * @description
 */
const RouteHeader = (props: Props): Element => {
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
      className={getClassName(props)}
      style={props.color ? {
        backgroundColor: props.color
      } : null}
    >
      <Row>
        <nav
          role="navigation"
          className={styles.viewNavigation}
        >
          {navigationItems.map(item => (
            <Text
              key={item.key}
              linkTo={item.linkTo}
              activeClassName="is-active"
              style={{
                color: props.textColor ? props.textColor : ''
              }}
            >
              {item.label}
            </Text>
          ))}
        </nav>
      </Row>
    </header>
  );
};

RouteHeader.defaultProps = {
  align: 'left'
};

export default RouteHeader;
