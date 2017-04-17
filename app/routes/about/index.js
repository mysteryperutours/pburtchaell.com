import React from 'react';
import paths from '../paths';
import Loader from '../../components/loader';
import AboutRoute from './component';

export default {
  path: paths.ABOUT,
  props: {
    config: {
      footer: {
        linkBackTo: {
          link: paths.INDEX,
          title: 'Home'
        }
      }
    }
  },
  component: AboutRoute
};
