// @flow
import { createElement, Element } from 'react';

type Props = {
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  className?: string,
  elementType: string,
  offset?: number,
  largeSize: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  smallSize: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  style?: Object
}

/**
 * The Column function can be used to create a column in the grid layout. This
 * element is generally a child of a Row element. There are 12 columns in the
 * grid. Using the `size` property, the width of the column can be set to any
 * value between 1 and 12. By default, the Column will render at full width.
 */
const Column = ({ children, elementType, ...props }: Props): Element<*> => {
  const classNames = ['column'];

  if (props.className) classNames.push([props.className]);
  if (props.largeSize) classNames.push([`column-large-${props.largeSize}`]);
  if (props.smallSize) classNames.push(`column-small-${props.smallSize}`);

  if (props.offsetSmall) {
    classNames.push([`column-push-small-${props.offsetSmall}`]);
  }

  if (props.offsetLarge) {
    classNames.push([`column-push-large-${props.offsetLarge}`]);
  }

  return createElement(
    elementType,
    {
      className: classNames.join(' ')
    },
    children
  );
};

Column.defaultProps = {
  elementType: 'div',
  scale: 'large',
  largeSize: 12, // Render at full width by default
  style: {}
};

export default Column;
