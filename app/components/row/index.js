// @flow
import { createElement, Element } from 'react';
import classNames from 'classnames';
import Column from '../column';
import './styles.less';

type Props = {
  className?: string,
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  defaultColumn?: boolean,
  elementType: string
}

/**
 * The Row function can be used to create a new row for the grid layout. By
 * default the Row will render as a `div` element, but using the `elementType`
 * property the Row can be customized to render as any HTML element.
 *
 * The Row can also have a custom className, set using the `className` property.
 */
const Row = ({
  className,
  children,
  defaultColumn,
  elementType,
  ...props
}: Props): Element<*> => {
  // Support rendering a single column by default
  function renderRowChild() {
    if (!children) return null;

    if (children.type === Column || defaultColumn === false) {
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
      'row-container--small': props.size === 'small',
      'row-container--medium': props.size === 'medium',
      'row-container--full-width': props.size === 'full'
    }, props.className)
  });
};

Row.defaultProps = {
  defaultColumn: true,
  elementType: 'div'
};

export default Row;
