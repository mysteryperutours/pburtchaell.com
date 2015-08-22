import React, { Component } from 'react';
import pureRender from 'utils/pureRender';

export default pureRender(class Branding extends Component {
  componentDidMount() {
    document.querySelector('.branding').classList.add('is-animated');
  }

  render() {
    return (
      <object className='branding'>
        <svg x="0px" y="0px" viewBox="0 0 95.5 69.9">
          <path d="M73.2,26.7l20.9,20.9L73.2,68.5L52.2,47.6L73.2,26.7
           M73.2,54.7l0.7-0.7l5.7-5.7l0.7-0.7l-0.7-0.7 l-5.7-5.7l-0.7-0.7l-0.7,
           0.7l-5.7,5.7L66,47.6l0.7,0.7l5.7,5.7L73.2,54.7M73.2,25.3L50.8,
           47.6l22.3,22.3l22.3-22.3L73.2,25.3 L73.2,25.3zM73.2,
           53.3l-5.7-5.7l5.7-5.7l5.7,5.7L73.2,53.3L73.2,53.3z" />
          <path d="M47.7,1.4l20.9,20.9L47.7,43.2L26.7,22.3L47.7,1.4
           M47.7,29.4l0.7-0.7l5.7-5.7l0.7-0.7l-0.7-0.7l-5.7-5.7l-0.7-0.7l-0.7,
           0.7l-5.7,5.7l-0.7,0.7l0.7,0.7l5.7,5.7L47.7,29.4 M47.7,0L25.3,
           22.3l22.3,22.3L70,22.3L47.7,0L47.7,0z M47.7,28 l-5.7-5.7l5.7-5.7l5.7,
           5.7L47.7,28L47.7,28z" />
          <path d="M22.3,26.7l20.9,20.9L22.3,68.5L1.4,47.6L22.3,
           26.7 M22.3,54.7L23,54l5.7-5.7l0.7-0.7l-0.7-0.7L23,
           41.2 l-0.7-0.7l-0.7,0.7l-5.7,5.7l-0.7,0.7l0.7,0.7l5.7,5.7L22.3,
           54.7 M22.3,25.3L0,47.6l22.3,22.3l22.3-22.3L22.3,25.3L22.3,
           25.3z M22.3,53.3l-5.7-5.7l5.7-5.7l5.7,5.7L22.3,53.3L22.3,53.3z" />
        </svg>
      </object>
    );
  }
});
