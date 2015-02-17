/** @jsx React.DOM */

import React from 'react';
import Liker from 'liker/components/liker';

let Liker = React.render(
  <Liker />,
  document.querySelector('#liker'),
  function () {
    if (development) {
      console.log('Liker module initialized.');
    }
  }
);

export default Liker;
