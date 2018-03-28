import React, {createElement, Element} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'gatsby-link'
import * as textTypes from './types'

const Text = (props) => {
  const {
    type,
    style,
    children,
    className,
  } = props

  const elementProps = {
    style,
    className,
  }

  return createElement(
    type,
    elementProps,
    children,
  )
}

Text.propTypes = {
  type: PropTypes.oneOf([
    textTypes.HEADER_1,
    textTypes.HEADER_2,
    textTypes.HEADER_3,
    textTypes.BODY,
    textTypes.SMALL,
  ]).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

Text.defaultProps = {
  type: textTypes.BODY,
}

export {Text as default, textTypes as types}
