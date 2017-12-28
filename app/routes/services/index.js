import React from 'react';
import ServicesRoute from './component';
import paths from '../paths';

export default {
  path: paths.SERVICES,
  props: {
    config: {
      footer: {
        linkTo: {
          path: paths.INDEX,
          title: 'Home'
        },
        linkToTop: false
      }
    }
  },
  component: ServicesRoute
};
