import React from 'react';
import Home from './view';

export default {
  path: '/',
  async action() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
      title: 'HOME YO',
      component: (
        <Home
          title=""
          header={false}
        />
      )
    };
  }
};
