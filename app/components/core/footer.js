import React, { Component } from 'react';
import pureRender from 'utils/pureRender';

export default pureRender(class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    let copyright = `${String.fromCharCode(169)} 2013-${year}`;

    return (
      <footer className={`page-footer ${this.props.className}`}>
        <div className="row row-full-width">
          <div className="col col-l-12 col-s-12">
            <small>
              <div className='page-footer-span'>
                <span>made with</span>
                <object className='page-footer-heart'>
                  <svg x='0' y='0' width='10px' height='10px' viewBox="0 0 10 8">
                    <path d='M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,
                    0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,
                    3.30,10,1.67,9.17,.6z' />
                  </svg>
                </object>
                <br/>
              </div>
              <div className='page-footer-legal'>
                <span>{copyright}</span>
                <span style={{ display: 'none' }}>Patrick Burtchaell</span>
              </div>
            </small>
          </div>
        </div>
      </footer>
    );
  }
});
