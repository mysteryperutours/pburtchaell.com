import React, {createElement, Element} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './styles.css'

/*
 * Function: Column
 * Description: Renders a column in a 12 column grid
 */
const Column = (props) => {
  const {
    largeSize,
    smallSize,
    hideOnSmall,
    hideOnLarge,
    className,
    children,
    styles,
    flexOrder,
    elementType,
  } = props

  // Get all of the class names on the column
  const elementClassName = classnames('column', {
    [`column--flex-order-${flexOrder}`]: typeof flexOrder === 'number',
    [`column--large-${largeSize}`]: largeSize,
    [`column--small-${smallSize}`]: smallSize,
    'column--hide-on-small': hideOnSmall,
    'column--hide-on-large': hideOnLarge,
  }, className)

  const elementProps = {
    className: elementClassName,
    styles,
  }

  return createElement(
    elementType,
    elementProps,
    children
  )
}

Column.propTypes = {
  /*
   * Rather than including a full 12 column grid, I only include the widths
   * that my page layouts will actually use.
   */
  largeSize: PropTypes.oneOf([4,5,6,8,12]).isRequired,
  smallSize: PropTypes.oneOf([4,5,6,8,12]).isRequired,
  hideOnLarge: PropTypes.bool,
  hideOnSmall: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
  styles: PropTypes.object,
  elementType: PropTypes.string.isRequired,
}

Column.defaultProps = {
  elementType: 'div',
  smallSize: 12,
  largeSize: 12,
}

export default Column;
