import React, { Children, Fragment } from 'react';
import PropTypes from 'prop-types';

function calculateBackground(type, lineHeight, color) {
  if (type === 'line') {
    const percentage = (lineHeight - 1) / lineHeight * 100;

    return {
      backgroundSize: `100% ${lineHeight}px`,
      backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent ${percentage}%, ${color} ${percentage}%, ${color} 100%)`,
    };
  }

  return {
    backgroundSize: `100% ${lineHeight * 2}px`,
    backgroundImage: `linear-gradient(to bottom, ${color} 50%, transparent 50%, transparent 100%)`,
  };
}

class Baseline extends React.Component {
  constructor(props) {
    super(props);

    const localState = JSON.parse(localStorage.getItem('baselineGrid'));

    const initialState = {
      show: false,
      color: 'rgba(36, 31, 32, 0.1)',
    };

    this.state = !localState ? initialState : localState;
  }

  componentDidUpdate() {
    localStorage.setItem('baselineGrid', JSON.stringify(this.state));
  }

  render() {
    const {
      type,
      lineHeight,
      color,
      children,
      style,
      disabled,
      ...restProps
    } = this.props;

    const controlStyle = {
      position: 'fixed',
      top: 0,
      right: 0,
      zIndex: 3,
      padding: '0.5rem',
      backgroundColor: this.state.color,
    };

    const baselineStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 2,
      pointerEvents: 'none',
      ...calculateBackground(type, lineHeight, color),
    };

    const rootProps = {
      ...restProps,
      style: { ...style, position: 'relative' },
    };

    return !disabled ? (
      <Fragment>
        <div style={controlStyle}>
          <input
            name="baselineGrid"
            type="checkbox"
            checked={this.state.show}
            onChange={() => this.setState({ show: !this.state.show })}
          />
          <label htmlFor="baselineGrid" style={{ paddingLeft: '0.5rem' }}>
            Baseline Grid
          </label>
        </div>
        <div {...rootProps}>
          {this.state.show && (
            <div style={baselineStyle} />
          )}
          {Children.only(children)}
        </div>
      </Fragment>
    ) : Children.only(children);
  }
}

Baseline.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Baseline.defaultProps = {
  disabled: false,
  type: 'line',
  lineHeight: 9,
  color: 'rgba(0, 0, 0, 0.15)',
  style: {},
};

export default Baseline;
