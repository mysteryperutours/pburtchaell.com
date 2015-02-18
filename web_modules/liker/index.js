import React from 'react';
import Heart from 'liker/components/heart';

let Liker = React.render(
  <Heart />,
  document.querySelector('#liker'),
  function () {
    if (development) {
      console.log('Liker module initialized.');
    }
  }
);

export default Liker;
