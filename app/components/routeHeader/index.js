import React, { Element } from 'react';

type Props = {
  navigationItems: array
}

/**
 * @function RouteHeader
 * @description
 */
const RouteHeader = (props: Props): Element => (
  <div className="view-header">
    {props.navigationItems.map(item => (
      <div key={item.key}>{item.label}</div>
    ))}
  </div>
);

export default RouteHeader;
