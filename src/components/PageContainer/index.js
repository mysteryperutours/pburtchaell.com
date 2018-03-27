import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Typekit from 'react-typekit'
import SiteFooter from '../SiteFooter'
import SiteHeader from '../SiteHeader'
import './styles.css'

/*
 * Function: PageContainer
 * Description: renders a page on the website
 */
const PageContainer = (props) => {
  let linkTo
  let linkToLabel
  let linkToTop

  const {
    pageTitle,
    siteTitle,
    siteUrl,
    description,
    keywords,
    head,
    footer,
    header,
    rowSize,
    navigationItems,
    children,
  } = props

  if (footer) {
    linkTo = footer.linkTo
    linkToLabel = footer.linkToLabel
    linkToTop = footer.linkToTop
  }

  return (
    <Fragment>
      <Typekit kitId="utb8ujs" />
      {head ? head : (
        <Helmet
          defaultTitle={siteTitle}
          title={`${pageTitle} - ${siteTitle}`}
          meta={[
            {name: 'description', content: description},
            {name: 'keywords', content: keywords},
            {name: 'og:type', content: 'website'},
            {name: 'og:site_name', content: siteTitle},
            {name: 'og:url', content: siteUrl},
            {name: 'og:title', content: pageTitle ? pageTitle : siteTitle},
            {name: 'og:description', content: ''},
            {name: 'og:image', content: '/images/cards/facebook.png'},
            {name: 'twitter:card', content: 'summary_large_image'},
            {name: 'twitter:image', content: '/images/cards/twitter.png'},
            {name: 'twitter:site', content: '@pburtchaell'},
            {name: 'twitter:domain', content: siteUrl},
            {name: 'twitter:title', content: pageTitle ? pageTitle : siteTitle},
            {name: 'twitter:description', content: description},
            {name: 'theme-color', content: '#FFFFFF'}
          ]}
        >
          <link rel="canonical" href={siteUrl} />
          <link rel="icon" type="image/png" href="/public/" sizes="16x16" />
          <link rel="icon" type="image/png" href="/public/" sizes="32x32" />
          <link rel="icon" type="image/png" href="/public/" sizes="96x96" />
        </Helmet>
      )}
      <div className="main__container">
        {header && (
          <SiteHeader
            title={pageTitle}
            navigationItems={navigationItems}
            rowSize={rowSize}
          />
        )}
        <main role="main" className="main">
          {children}
        </main>
        {footer && (
          <SiteFooter
            linkTo={linkTo}
            linkToLabel={linkToLabel}
            linkToTop={linkToTop}
            rowSize={rowSize}
          />
        )}
      </div>
    </Fragment>
  )
}

PageContainer.propTypes = {
  // Property to set row size for header and footer rows
  rowSize: PropTypes.string,
  // Property to hide/show header
  header: PropTypes.bool.isRequired,
  // Property to hide/show footer
  footer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      linkTo: PropTypes.string,
      linkToLabel: PropTypes.string,
      linkToTop: PropTypes.bool,
    }),
  ]),
  // Property to render a custom head
  head: PropTypes.element,
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string,
  siteTitle: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  navigationItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })),
}

PageContainer.defaultProps = {
  header: true,
  footer: true,
}

export default PageContainer
