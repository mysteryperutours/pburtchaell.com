import { createElement, Element } from 'react';
import classNames from 'classnames';

/**
 * The Column function can be used to create a column in the grid layout. This
 * element is generally a child of a Row element. There are 12 columns in the
 * grid. Using the `size` property, the width of the column can be set to any
 * value between 1 and 12. By default, the Column will render at full width.
 */
const Column = ({ children, elementType, ...props }) => {
  return createElement(
    elementType,
    {
      className: classNames('column', {
        [`column--large-${props.largeSize}`]: props.largeSize,
        [`column--small-${props.smallSize}`]: props.smallSize,
        'column--hide-on-small': props.hideOnSmall,
      }, props.className)
    },
    children
  );
};

Column.defaultProps = {
  elementType: 'div',
  scale: 'large',
  smallSize: 12,
  largeSize: 12,
  style: {}
};

export default Column;
