// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import handleScrollEvent from '../../../../../../support/handleScrollEvent';

type Props = {
  children: Array<*>
};

type State = {
  offset: number,
  isSignified: boolean
};

const INITIAL_STATE: State = {
  offset: 0,
  isSignified: false
};


class Slider extends Component {
  constructor(props: Props) {
    super(props);

    this.state = INITIAL_STATE;

    this.increment = this.increment.bind(this);
    this.signify = this.signify.bind(this);

    this.handleScrollEvent = handleScrollEvent.bind(this, () => {
      if (this.getIsVisible(this.element) === true) {
        setTimeout(() => {
          this.signify();
        }, 400);
      }
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  getIsVisible(el) {
    const rect = el.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  signify() {
    this.setState({
      isSignified: true
    });
  }

  increment(forceOffset: Number) {
    let newOffset;

    if (forceOffset) {
      newOffset = forceOffset;
    }

    if (this.state.offset === 2) {
      newOffset = 0;
    } else {
      newOffset = this.state.offset + 1;
    }

    this.setState({
      offset: newOffset
    });
  }

  render() {
    let basePxSize;
    let margin;

    const childLength = this.props.children.length;
    const maxWidth = 720;

    let slideWidth;
    let sliderWidth;

    if (window.innerWidth <= maxWidth) {
      basePxSize = 7;
      margin = ((7 * 4) * childLength);
      sliderWidth = (window.innerWidth * childLength) + margin;
      slideWidth = window.innerWidth - (basePxSize * 4);
    } else {
      basePxSize = 8;
      margin = ((7 * 4) * childLength);
      sliderWidth = (maxWidth * childLength) + margin;
      slideWidth = maxWidth - (basePxSize * 4);
    }

    return (
      <div
        className={classNames('image-slider-container', {
          'is-signified': this.state.isSignified
        })}
        onClick={this.increment}
        ref={(node) => {
          this.element = node;
        }}
      >
        <div
          className="image-slider"
          style={{
            width: `${sliderWidth}px`,
            marginLeft: `-${(slideWidth + (basePxSize * 4)) * this.state.offset}px`
          }}
        >
          {this.props.children.map((child, i) => (
            <div
              key={i}
              style={{
                width: slideWidth
              }}
              className={classNames('slide', {
                'is-active': this.state.offset === i,
                'is-left': this.state.offset < i,
                'is-right': this.state.offset > i
              })}
            >
              <div className="slide-header">
                <div className="slide-header--title">
                  {child.title}
                </div>
                <div className="slide-header--subtitle">
                  {child.subtitle}
                </div>
              </div>
              <div className="slide-image">
                <div
                  style={{
                    width: '100%',
                    height: `${0.75 * slideWidth}px`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundImage: `url(${child.src})`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
