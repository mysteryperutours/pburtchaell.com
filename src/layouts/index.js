/* eslint-disable import/first */
import 'normalize.css';
import '../styles/index.css';
import React from 'react';
import PropTypes from 'prop-types';
import Baseline from '../components/Baseline';

/*
 * Function: DefaultLayout
 * Description: Render the default layout used for all pages
 */
const DefaultLayout = ({ children, location, ...restProps }) => children({ ...restProps, location });


DefaultLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DefaultLayout;
