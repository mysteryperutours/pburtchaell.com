import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

/**
 * Function: Row
 * Description: Renders a row in a 12 column grid
 */
const Row = (props) => {
  const {
    children,
    padding,
    className,
  } = props;

  const classNames = classnames('row', className, {
    padding,
    [`padding-size-${padding}`]: padding,
  });

  return (
    <section className={classNames}>
      {children}
    </section>
  );
};

Row.propTypes = {
  padding: PropTypes.oneOf([
    'none',
    'default',
    'large',
    'small',
  ]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
};


Row.defaultProps = {
  padding: 'default',
  className: null,
  children: null,
};

export default Row;
