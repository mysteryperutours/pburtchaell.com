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
  const {
    pageTitle,
    siteTitle,
    siteUrl,
    pageUrl,
    imageUrl,
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
    links,
  } = props;

  const publicImages = '/images';
  const publicCards = `${siteUrl}${publicImages}/cards`;
  const publicFavicons = `${publicImages}/favicons`;

  // Declare a permanent canonical URl for the page for SEO and Open Graph
  const canonicalUrl = pageUrl ? `${siteUrl}${pageUrl}/` : `${siteUrl}`;

  return (
    <Fragment>
      {head || (
        <Helmet
          defaultTitle={siteTitle}
          title={`${pageTitle} - ${siteTitle}`}
          meta={[
            { charSet: 'utf-8' },
            { httpEquiv: 'x-ua-compatible', content: 'ie=edge' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: siteTitle },
            { name: 'og:url', content: canonicalUrl },
            { name: 'og:title', content: pageTitle },
            { name: 'og:description', content: description },
            { name: 'og:image', content: !imageUrl ? `${publicCards}/facebook.png` : `${siteUrl}${imageUrl}` },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:image', content: !imageUrl ? `${publicCards}/twitter.png` : `${siteUrl}${imageUrl}` },
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
      <div className="site-container">
        {header && (
          <SiteHeader
            title={pageTitle}
            rowSize={rowSize}
            links={links}
          />
        )}
        <main role="main" className="site-main-content">
          <Row padding="large">
            {children}
          </Row>
        </main>
        {footer && (
          <SiteFooter
            linkTo={linkTo}
            linkToLabel={linkToLabel}
            linkToTop={linkToTop}
            rowSize={rowSize}
            links={links}
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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  // Property to set the page title, .e.g., "About"
  pageTitle: PropTypes.string.isRequired,
  // Property to set the site title, e.g., "Patrick Burtchaell"
  siteTitle: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkTo: PropTypes.string,
  linkToLabel: PropTypes.string,
  linkToTop: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
  })),
};

PageContainer.defaultProps = {
  rowSize: 'large',
  header: true,
  footer: true,
  head: null,
  linkTo: null,
  linkToLabel: null,
  linkToTop: false,
  imageUrl: null,
  links: [
    { label: 'Work', linkTo: '/work' },
    { label: 'Writing', linkTo: '/writing' },
    { label: 'About', linkTo: '/about' },
  ],
};

export default PageContainer;
