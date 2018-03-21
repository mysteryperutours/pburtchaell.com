import React, {Element, Component} from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import Row from '../../components/row'
import Column from '../../components/column'
import './styles.css'

/*
 * Class: RouteHeader
 * Description:
 */
class RouteHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigationItems = [{
      key: 0,
      label: 'Home',
      linkTo: '/'
    }]

    return (
      <header role="banner">

      </header>
    )
  }
}

export default RouteHeader
