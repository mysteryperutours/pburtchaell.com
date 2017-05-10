import { createElement, Element } from 'react';
import classNames from 'classnames';

type Props = {
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  className?: string,
  elementType?: string,
  largeSize: 4 | 6 | 8 | 12,
  smallSize: 4 | 6 | 8 | 12,
  style?: Object
}

/**
 * The Column function can be used to create a column in the grid layout. This
 * element is generally a child of a Row element. There are 12 columns in the
 * grid. Using the `size` property, the width of the column can be set to any
 * value between 1 and 12. By default, the Column will render at full width.
 */
const Column = ({ children, elementType, ...props }: Props): Element<*> => {
  return createElement(
    elementType,
    {
      className: classNames('column', {
        [`column-large-${props.largeSize}`]: props.largeSize,
        [`column-small-${props.smallSize}`]: props.smallSize
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
