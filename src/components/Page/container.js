import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SiteFooter from '../SiteFooter';
import SiteHeader from '../SiteHeader';
import Row from '../Row';
import './styles.css';

/*
 * Function: PageContainer
 * Description: renders a page on the website
 */
const PageContainer = (props) => {
  const publicImages = '/images';
  const publicCards = `${publicImages}/cards`;
  const publicFavicons = `${publicImages}/favicons`;

  const {
    pageTitle,
    siteTitle,
    siteUrl,
    pageUrl,
    description,
    keywords,
    head,
    footer,
    header,
    rowSize,
    children,
    linkTo,
    linkToLabel,
    linkToTop,
  } = props;

  // Declare a permanent canonical URl for the page for SEO and Open Graph
  const canonicalUrl = pageUrl ? `${siteUrl}/${pageUrl}/` : `${siteUrl}/`;

  return (
    <Fragment>
      {head || (
        <Helmet
          defaultTitle={siteTitle}
          title={`${pageTitle} - ${siteTitle}`}
          meta={[
            { charSet: 'utf-8' },
            { httpEquiv: 'x-ua-compatible', content: 'ie=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: siteTitle },
            { name: 'og:url', content: canonicalUrl },
            { name: 'og:title', content: pageTitle },
            { name: 'og:description', content: description },
            { name: 'og:image', content: `${publicCards}/facebook.png` },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:image', content: `${publicCards}/twitter.png` },
            { name: 'twitter:site', content: '@pburtchaell' },
            { name: 'twitter:domain', content: siteUrl },
            { name: 'twitter:title', content: pageTitle },
            { name: 'twitter:description', content: description },
            { name: 'theme-color', content: '#FFFFFF' },
          ]}
        >
          <link rel="canonical" href={canonicalUrl} />
          <link
            rel="icon"
            type="image/png"
            href={`${publicFavicons}/16x16.png`}
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${publicFavicons}/32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${publicFavicons}/96x96.png`}
            sizes="96x96"
          />
        </Helmet>
      )}
      <div className="main__container">
        {header && (
          <SiteHeader
            title={pageTitle}
            rowSize={rowSize}
          />
        )}
        <main role="main" className="main">
          <Row paddingSize="large" rowSize="large" flexBox>
            {children}
          </Row>
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
  );
};

PageContainer.propTypes = {
  // Property to set row size for header and footer rows
  rowSize: PropTypes.string,
  // Property to hide/show header
  header: PropTypes.bool,
  // Property to hide/show footer
  footer: PropTypes.bool,
  // Property to render a custom head
  head: PropTypes.element,
  children: PropTypes.element.isRequired,
  // Property to set the page title, .e.g., "About"
  pageTitle: PropTypes.string.isRequired,
  // Property to set the site title, e.g., "Patrick Burtchaell"
  siteTitle: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkTo: PropTypes.string,
  linkToLabel: PropTypes.string,
  linkToTop: PropTypes.bool,
};

PageContainer.defaultProps = {
  rowSize: 'large',
  header: true,
  footer: true,
  head: null,
  linkTo: null,
  linkToLabel: null,
  linkToTop: false,
};

export default PageContainer;
