import React from 'react'
import Row from '../components/row'
import Column from '../components/column'
import Text, {types as textTypes} from '../components/text'

const IndexPage = () => (
  <Row size="large">
    <Column largeSize={6} smallSize={12}>
      <Text type={textTypes.HEADER_2}>
        Patrick Burtchaell
      </Text>
      <Text>
        Designer and web developer, working with teams to thoughtfully build impactful products.
      </Text>
    </Column>
  </Row>
)

export default IndexPage;
