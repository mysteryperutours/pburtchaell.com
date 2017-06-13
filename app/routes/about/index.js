import React from 'react';
import paths from '../paths';
import AboutRoute from './component';

export default {
  path: paths.ABOUT,
  props: {
    config: {
      footer: {
        linkTo: {
          path: paths.INDEX,
          title: 'My Work'
        }
      }
    }
  },
  component: AboutRoute
};
