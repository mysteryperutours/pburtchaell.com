import React, { Element } from 'react';
import classNames from 'classnames';
import RouteFooter from '../routeFooter';
import RouteHeader from '../routeHeader';
import styles from './styles.less';

type Props = {
  header: null | object | boolean,
  footer: null | object | boolean,
  children: Element<*>,
  isPending?: boolean,
  color?: String,
  textColor?: String,
  defaultTheme: boolean
}

/**
 * @function RouteContainer
 * @description A "route" is essentially a page in the application. By default,
 * the header and footer are included. One or more children elements are
 * required for the body.
 *
 * I can disable the header or footer by passing in a `header="false"` or
 * `footer="false"`` prop on the component. It is also possible to customize
 * the header using an object.
 */
const RouteContainer = ({
  header,
  footer,
  children,
  ...props
}: Props): Element => (
  <div className="route-container">
    {!header ? null : (
      <RouteHeader
        initialRedChannel={props.color.r}
        initialGreenChannel={props.color.g}
        initialBlueChannel={props.color.b}
        {...header}
      />
    )}
    <main
      role="main"
      className={classNames(styles.routeBody, {
        [styles.routeBodyDefault]: props.defaultTheme
      })}
    >
      {children}
    </main>
    {props.isPending || !footer ? null : (
      <RouteFooter
        color={props.color}
        {...footer}
      />
    )}
  </div>
);

RouteContainer.defaultProps = {
  header: true,
  footer: true,
  defaultTheme: true,
  color: {
    r: 255,
    g: 255,
    b: 255
  }
};

export default RouteContainer;
