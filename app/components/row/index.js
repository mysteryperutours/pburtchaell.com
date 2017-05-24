// @flow
import { createElement, Element } from 'react';
import classNames from 'classnames';
import Column from '../column';

type Props = {
  className?: string,
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  defaultColumn?: boolean,
  elementType?: string
}

/**
 * The Row function can be used to create a new row for the grid layout. By
 * default the Row will render as a `div` element, but using the `elementType`
 * property the Row can be customized to render as any HTML element.
 *
 * The Row can also have a custom className, set using the `className` property.
 */
const Row = ({
  children,
  elementType,
  defaultColumn,
  ...props
}: Props): Element<*> => {
  // Support rendering a single column by default
  function renderRowChild() {
    if (!children) return null;

    if (defaultColumn === false) {
      return children;
    }

    if (Array.isArray(children)) {
      if (children[0].type === Column) {
        return children;
      }
    } else if (children.type === Column) {
      return children;
    }

    return createElement(Column, {}, children);
  }

  return createElement(elementType, {
    ...props,
    children: createElement('div', {
      className: 'row'
    }, renderRowChild()),
    className: classNames('row-container', {
      'row-container--default': props.size === 'default',
      'row-container--large': props.size === 'large',
      'row-container--medium': props.size === 'medium'
    }, props.className)
  });
};

Row.defaultProps = {
  size: 'default',
  elementType: 'div'
};

export default Row;
