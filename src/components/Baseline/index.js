import React, { Children } from 'react';
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

function Baseline(props) {
  const {
    disabled,
    type,
    lineHeight,
    color,
    children,
    style,
    ...restProps
  } = props;

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

  return (
    <div {...rootProps}>
      {!disabled && (
        <div style={baselineStyle} />
      )}
      {Children.only(children)}
    </div>
  );
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
