import React from 'react'
import Link from 'gatsby-link'
import PageContainer from '../components/PageContainer'
import Column from '../components/Column'
import Row from '../components/Row'
import Text, {types as textTypes} from '../components/Text'

const NotFoundPage = ({data}) => {
  const {site} = data

  return (
    <PageContainer
      pageTitle="Home"
      siteTitle={site.metadata.title}
      siteUrl={site.metadata.url}
      description={site.metadata.description}
      keywords={site.metadata.keywords}
    >
      <Row rowSize="large" paddingSize="large">
        <Column largeSize="4" smallSize="12">
          <Text>
            Page Not Found
          </Text>
          <Text type={textTypes.SMALL} className="small-reset-margin">
            {`Oh no! Sorry, but there's no page here.`}
          </Text>
          <Text>
            <Link to="/">&#8592; Go Home</Link>
          </Text>
        </Column>
      </Row>
    </PageContainer>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      metadata: siteMetadata {
        url
        title
        description
        keywords
      }
    }
  }
`
