import React from 'react';
import About from './view';

export default {
  path: '/about',
  action: () => ({
    title: 'about YO',
    component: <About />
  })
};
