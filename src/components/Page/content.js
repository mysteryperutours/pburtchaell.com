import React from 'react';
import PropTypes from 'prop-types';
import Column from '../Column';

/*
 * Function: PageContent
 * Description:
 */
const PageContent = ({ children, flexOrder }) => {
  return (
    <Column largeSize={6} smallSize={12} flexOrder={flexOrder}>
      <div
        className="project--column-1"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </Column>
  );
};

PageContent.propTypes = {
  flexOrder: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};


export default PageContent;
