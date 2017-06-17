import React, { Element, Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Row from '../../components/row';
import Column from '../../components/column';
import RouteHeaderHire from '../../components/routeHeaderHire';
import paths from '../../routes/paths';
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

  render(): Element<*> {
    const showTitle = false;

    const navigationItems = [{
      key: 0,
      label: 'Work',
      linkTo: paths.INDEX
    }, {
      key: 1,
      label: 'Profile',
      linkTo: paths.ABOUT
    }];

    return (
      <header
        role="banner"
        className={classNames('site-header', {
          'is-scrolled': this.state.isScrolled
        })}
      >
        <Row size="large">
          <Column largeSize="3" smallSize="8">
            <nav
              role="navigation"
              className="site-navigation"
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
          </Column>
          {this.props.title ? (
            <Column largeSize="3" hideOnSmall={true}>
              {this.state.showTitle ? (
                <div className="site-header-title">{this.props.title}</div>
              ) : null}
            </Column>
          ) : null}
          <Column largeSize="3" smallSize="4">
            <RouteHeaderHire />
          </Column>
        </Row>
      </header>
    );
  }
}

export default RouteHeader;
