import React, { Element } from 'react';
import RouteFooter from '../routeFooter';
import RouteHeader from '../routeHeader';
import GridPreview from '../gridPreview';
import './styles.less';

type Props = {
  header: null | object | boolean,
  footer: null | boolean,
  children: Element<*>,
  isPending?: boolean,
  color?: String,
  textColor?: String,
  defaultStyles: boolean
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
  header = true,
  footer = true,
  defaultStyles = true,
  children,
  ...props
}: Props): Element => (
  <div className="route-container">
    {!header ? null : (
      <RouteHeader
        color={props.color}
        textColor={props.textColor}
        {...header}
      />
    )}
    <main
      role="main"
      className={`route-body ${defaultStyles ? 'route-body-default' : null}`}
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

export default RouteContainer;
