import { createElement } from 'react';
import PropTypes from 'prop-types';
import * as textTypes from './types';

const Text = (props) => {
  const {
    type,
    style,
    children,
    className,
    onClick,
  } = props;

  const elementProps = {
    style,
    className,
    onClick,
  };

  return createElement(
    type,
    elementProps,
    children,
  );
};

Text.propTypes = {
  type: PropTypes.oneOf([
    textTypes.HEADER_1,
    textTypes.HEADER_2,
    textTypes.HEADER_3,
    textTypes.BODY,
    textTypes.SMALL,
  ]),
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onClick: PropTypes.func,
};

Text.defaultProps = {
  type: textTypes.BODY,
  style: null,
  className: null,
  children: null,
  onClick: e => e,
};

export { Text as default, textTypes as types };
