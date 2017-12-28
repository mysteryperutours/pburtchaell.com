import React from 'react';
import { Redirect } from 'react-router';
import paths from '../paths';

export default {
  path: paths.ABOUT,
  props: {},
  component: () => <Redirect to="/" />
};
