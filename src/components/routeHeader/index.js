import React, { Element, Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Row from '../../components/row';
import Column from '../../components/column';
import handleScrollEvent from '../../support/handleScrollEvent';
import './styles.css';

const INITIAL_STATE = {
  isScrolled: false,
  showTitle: false,
  scrollY: 0
};

/**
 * @function RouteHeader
 * @description
 */
class RouteHeader extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.handleScrollEvent = handleScrollEvent.bind(this, () => {


      if (this.props.title) {
        const element = document.querySelector('.case-study-content');
        const isScrolled = window.scrollY >= element.getBoundingClientRect().top;

        return this.setState({
          showTitle: isScrolled,
          isScrolled: isScrolled,
          scrollY: window.scrollY
        });
      }

      this.setState({
        scrollY: window.scrollY
      });
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  render() {
    const showTitle = false;

    const navigationItems = [{
      key: 0,
      label: 'Home',
      linkTo: '/'
    }];

    return (
      <header
        role="banner"
        className={classNames('route__header', {
          'route__header--is-scrolled': this.state.isScrolled,
          'route__header--is-home': this.props.title === undefined
        })}
      >
        <Row size="large">
          <Column largeSize="3" smallSize="8">
            {this.props.title ? (
              <nav
                role="navigation"
                className="route__navigation"
              >
                {navigationItems.map(item => (
                  <NavLink
                    key={item.key}
                    to={item.linkTo}
                    exact={(item.linkTo === paths.INDEX)}
                    className="site-navigation-item"
                    activeClassName="is-active"
                  >
                    <span className="site-navigation-item-text">
                      {item.label}
                    </span>
                  </NavLink>
                ))}
              </nav>
            ) : null}
          </Column>
          {this.props.title ? (
            <Column largeSize="3" hideOnSmall={true}>
              {this.state.showTitle ? (
                <div className="site-header-title">{this.props.title}</div>
              ) : null}
            </Column>
          ) : null}
          <Column largeSize="3" smallSize="4"></Column>
        </Row>
      </header>
    );
  }
}

export default RouteHeader;
