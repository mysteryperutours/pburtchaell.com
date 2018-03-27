import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './styles.css'

/**
 * Function: Row
 * Description: Renders a row in a 12 column grid
 */
const Row = (props) => {
  const {
    children,
    elementType,
    rowSize,
    paddingSize,
    flexBox,
    className,
  } = props

  const classNames = classnames('row__container', {
    'row__container--flexbox': flexBox,
    'row__container--default': rowSize === 'default',
    'row__container--large': rowSize === 'large',
    'row__container--full-width': rowSize === 'full-width',
  }, className)

  return (
    <section className={classNames}>
      {paddingSize && (
        <div className={`padding padding--${paddingSize}`} />
      )}
      <div className="row">
        {children}
      </div>
    </section>
  )
}

Row.propTypes = {
  rowSize: PropTypes.oneOf([
    'default',
    'large',
    'full-width',
  ]).isRequired,
  paddingSize: PropTypes.oneOf([
    'default',
    'large',
    'small',
  ]).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
}


Row.defaultProps = {
  rowSize: 'default',
}

export default Row
