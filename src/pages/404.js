import React from 'react'
import Link from 'gatsby-link'
import Column from '../components/Column'
import Row from '../components/Row'
import Text, {types as textTypes} from '../components/Text'

const NotFoundPage = () => (
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
)

export default NotFoundPage
