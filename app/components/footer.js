import React from 'react';
import { Field, Label, Input } from 'react-input';

/**
 * @class Footer
 * @description The main footer.
 */
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange() {

  }

  get className() {
    const className = !this.props.isDark ? 'page-footer' : 'page-footer dark-ui';
    return className;
  }

  render() {
    let copyright =
      String.fromCharCode(169) +
      ' Copyright 2013-' +
      new Date().getFullYear();

    return (
      <footer className={this.className}>
        <div className="page-footer-content">
          <small>
            <div className='page-footer-span'>
              <span>Made with</span>
              <object className='page-footer-heart'>
                <svg x='0' y='0' width='10px' height='10px' viewBox="0 0 10 8">
                  <path d='M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,
                  0.6c-0.97-0.9-2.5-0.8-3.5,0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,
                  3.30,10,1.67,9.17,.6z' />
                </svg>
              </object>
              <span>in New Orleans.</span>
              <br/>
            </div>
            <div className='page-footer-legal'>
              <span>{copyright}</span>
              <span>Patrick Burtchaell.</span>
            </div>
          </small>
        </div>
      </footer>
    );
  }
}
