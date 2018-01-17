import { createElement, Element } from 'react';
import classNames from 'classnames';
import Column from '../column';

/**
 * The Row function can be used to create a new row for the grid layout. By
 * default the Row will render as a `div` element, but using the `elementType`
 * property the Row can be customized to render as any HTML element.
 *
 * The Row can also have a custom className, set using the `className` property.
 */
const Row = ({ children, elementType, ...props }) => {
  return createElement(elementType, {
    ...props,
    
    children: createElement('div', {
      className: 'row'
    }, children),

    className: classNames('row__container', {
      'row__container--default': props.size === 'default',
      'row__container--large': props.size === 'large',
      'row__container--medium': props.size === 'medium'
    }, props.className)
  });
};

Row.defaultProps = {
  size: 'default',
  elementType: 'div'
};

export default Row;
