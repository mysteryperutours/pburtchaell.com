// @flow
import { createElement, Element } from 'react';
import './styles.css';

type Props = {
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  className?: string,
  elementType: string,
  offset?: number,
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  style?: Object
}

/**
 * The Column function can be used to create a column in the grid layout. This
 * element is generally a child of a Row element. There are 12 columns in the
 * grid. Using the `size` property, the width of the column can be set to any
 * value between 1 and 12. By default, the Column will render at full width.
 */
const Column = ({ size, children, className, elementType, ...props }: Props): Element<*> => {
  // The percentage width of the column on a grid 12 columns wide
  const columnSize: number = (100 / 12);
  const columnWidth: number = columnSize * size;
  const columnClassName: string = 'column';

  return createElement(
    elementType,
    {
      ...props,
      className: `${columnClassName} ${columnClassName}-${size}${className ? ' ' + className : ''}`,
      style: Object.assign({

        // @TODO: Add support for IE
        flexBasis: `${columnWidth}%`,
        maxWidth: `${columnWidth}%`
      }, props.offset ? {
        marginLeft: `${columnSize * props.offset}%`
      } : {}, props.style)
    },
    children
  );
};

Column.defaultProps = {
  elementType: 'div',
  size: 12, // Render at full width by default
  style: {}
};

export default Column;
