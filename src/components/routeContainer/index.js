import React, { Element } from 'react';
import classNames from 'classnames';
import RouteFooter from '../routeFooter';
import RouteHeader from '../routeHeader';
import './styles.css';

/**
 * A route is a page in the application. By default, the header and footer are
 * included. One or more children elements are required for the body.
 *
 * I can disable the header or footer by passing in a `header="false"` or
 * `footer="false"`` prop on the component. It is also possible to customize
 * the header using an object.
 */
const RouteContainer = ({ header, footer, children, ...props }) => (
  <div className="route__container">
    {!header ? null : (
      <RouteHeader
        title={props.title}
        {...header}
      />
    )}
    <main
      role="main"
      className={classNames('route__body', {
        'route__body--is-default': props.defaultTheme
      })}
    >
      {children}
    </main>
    {props.isPending || !footer ? null : (
      <RouteFooter
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
