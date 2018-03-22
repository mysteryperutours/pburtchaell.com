import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteFooter from '../SiteFooter'
import SiteHeader from '../SiteHeader'
import './styles.css'

/*
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
    meta,
    head,
    footer,
    header,
    children,
  } = props

  return (
    <Fragment>
      {head ? head : (
        <Helmet
          title={meta.title}
          meta={[
            {name: 'description', content: meta.description},
            {name: 'keywords', content: meta.keywords},
          ]}
        />
      )}
      <div className="main__container">
        {header && (
          <SiteHeader
            title={title}
            navigationItems={[{
              label: 'Home',
              linkTo: '/'
            }]}
          />
        )}
        <main role="main" className="main">
          {children}
        </main>
        {footer && (
          <SiteFooter

          />
        )}
      </div>
    </Fragment>
  )
}

RouteContainer.propTypes = {
  header: PropTypes.bool.isRequired,
  footer: PropTypes.bool.isRequired,
  head: PropTypes.element,
  children: PropTypes.element.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
  })
}


RouteContainer.defaultProps = {
  header: true,
  footer: true,
}

export default RouteContainer;
