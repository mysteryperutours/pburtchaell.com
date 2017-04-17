import React, { Element, Component } from 'react';
import classNames from 'classnames';
import Row from '../../components/row';
import Text from '../text';
import paths from '../../routes/paths';
import styles from './styles.less';
import handleScrollEvent from '../../support/handleScrollEvent';

const INITIAL_STATE = {
  isScrolled: false,
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
    let alphaChannel = 0.85;
    let textRedChannel = 36;
    let textGreenChannel = 31;
    let textBlueChannel = 32;

    const navigationItems = [{
      key: 0,
      label: 'Home',
      linkTo: paths.INDEX
    }, {
      key: 1,
      label: 'About',
      linkTo: paths.ABOUT
    },
    {
      key: 2,
      label: 'Work',
      linkTo: paths.WORK
    }];

    if (this.props.isInterpolated) {
      let steps;

      const textRedChannelInitial = this.props.initialRedChannel;
      const textGreenChannelInitial = this.props.initialGreenChannel;
      const textBlueChannelInitial = this.props.initialBlueChannel;

      textRedChannel = textRedChannelInitial;
      textGreenChannel = textGreenChannelInitial;
      textBlueChannel = textBlueChannelInitial;

      if (this.state.scrollY < 300) {
        steps = (Math.min(0.85, Math.max(0, this.state.scrollY / 300)));

        textRedChannel = Math.round(
          textRedChannelInitial + (steps * (36 - textRedChannelInitial))
        );
        textGreenChannel = Math.round(
          textGreenChannelInitial + (steps * (31 - textGreenChannelInitial))
        );
        textBlueChannel = Math.round(
          textBlueChannelInitial + (steps * (32 - textBlueChannelInitial))
        );
        alphaChannel = steps;
      } else {
        steps = 1;
        textRedChannel = 36;
        textGreenChannel = 31;
        textBlueChannel = 32;
        alphaChannel = 0.85;
      }
    }

    return (
      <header
        role="banner"
        className={classNames(styles.viewHeader, {
          [styles.viewHeaderTransparent]: this.props.type === 'transparent'
        })}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${alphaChannel})`
        }}
      >
        <Row>
          <nav
            role="navigation"
            className={styles.viewNavigation}
          >
            {navigationItems.map(item => (
              <Text
                key={item.key}
                linkTo={item.linkTo}
                navLink={true}
                activeClassName="is-active"
                style={{
                  color: `rgb(
                    ${textRedChannel},
                    ${textGreenChannel},
                    ${textBlueChannel}
                  )`
                }}
              >
                {item.label}
              </Text>
            ))}
          </nav>
        </Row>
      </header>
    );
  }
}

RouteHeader.defaultProps = {
  align: 'left',
  isInterpolated: false
};

export default RouteHeader;
