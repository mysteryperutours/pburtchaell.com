import React from 'react';
import Error from './view';

export default {
  path: '*',
  action: () => ({
    title: 'ERROR YO',
    component: <Error />
  })
};
