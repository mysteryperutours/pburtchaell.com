import React, {Fragment} from 'react'
import Row from '../components/Row'
import Column from '../components/Column'
import Text, {types as textTypes} from '../components/text'

/*
 * Function: AboutPage
 * Description:
 */
const AboutPage = () => {
  return (
    <Fragment>
      <Row paddingSize="large">
        <Column largeSize={6} smallSize={12}>
          <Text type={textTypes.HEADER_1}>
            About
          </Text>
          <Text>
            Patrick Burtchaell is a designer and software developer from New Orleans who works with teams to thoughtfully build impactful products.
          </Text>
        </Column>
      </Row>
    </Fragment>
  )
}

export default AboutPage
