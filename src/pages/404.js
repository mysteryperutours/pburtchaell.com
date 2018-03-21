import React from 'react'
import Column from '../components/column'
import Row from '../components/row'
import Text, { types as textTypes } from '../components/text'

const NotFoundPage = () => (
  <Row>
    <Column largeSize="8" smallSize="12">
      <Text type={textTypes.HEADER_2}>Patrick Burtchaell</Text>
      <Text>Oh no! Sorry, but no page page there.</Text>
      <hr />
      <Text linkTo="/"><small>&#8592; Try here</small></Text>
    </Column>
  </Row>
)

export default NotFoundPage
