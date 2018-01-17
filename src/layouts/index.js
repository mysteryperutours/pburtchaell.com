import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RouteContainer from '../components/RouteContainer';
import '../styles/index.css';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Helmet
        title={`Patrick Burtchaell`}
        meta={[
          {
            name: 'description',
            content: ''
          },
          {
            name: 'keywords',
            content: ''
          }
        ]}
      />
      <RouteContainer>
        {children()}
      </RouteContainer>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.func
};

export default DefaultLayout;
