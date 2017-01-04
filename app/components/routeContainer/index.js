import React, { Element } from 'react';
import RouteFooter from '../routeFooter';
import RouteHeader from '../routeHeader';

type Props = {
  header: null | object | boolean,
  footer: null | boolean,
  children: Element<*>
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
  children
}: Props): Element => (
  <div className="route-container">
    {!header ? null : (<RouteHeader {...header} />)}
    <main role="main" className="route-body">
      {children}
    </main>
    {!footer ? null : (<RouteFooter />)}
  </div>
);

export default RouteContainer;
