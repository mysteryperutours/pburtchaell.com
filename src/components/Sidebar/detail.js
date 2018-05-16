import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Text, { types as textTypes } from '../Text';

function SidebarDetail({ label, data, formatData }) {
  if (data) {
    const renderData = v =>
      (Array.isArray(v) ? Array.from(v).map(i => <Fragment>{i}<br /></Fragment>) : v);

    return (
      <Fragment>
        <Text>
          <Text type={textTypes.SMALL}>
            {label}
          </Text>
        </Text>
        <Text>
          {renderData(formatData ? formatData(data) : data)}
        </Text>
      </Fragment>
    );
  }

  return null;
}

SidebarDetail.defaultProps = {
  formatData: data => data,
};

SidebarDetail.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  formatData: PropTypes.func,
};

export default SidebarDetail;
