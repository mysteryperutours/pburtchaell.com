import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RouteFooter from '../routeFooter'
import RouteHeader from '../routeHeader'
import './styles.css';

/**
 * A route is a page in the application. By default, the header and footer are
 * included. One or more children elements are required for the body.
 *
 * I can disable the header or footer by passing in a `header="false"` or
 * `footer="false"`` prop on the component. It is also possible to customize
 * the header using an object.
 */
const RouteContainer = (props) => {
  const {
    title,
    footer,
    header,
    children,
  } = props

  const mainClassName = classNames('main', {
    'main--default': props.defaultTheme
  })

  return (
    <div className="main__container">
      {header && (
        <RouteHeader
          title={title}
        />
      )}
      <main role="main" className={bodyClassName}>
        {children}
      </main>
      {footer && (
        <RouteFooter />
      )}
    </div>
  )
}

RouteContainer.propTypes = {
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}


RouteContainer.defaultProps = {
  header: true,
  footer: true,
}

export default RouteContainer;
