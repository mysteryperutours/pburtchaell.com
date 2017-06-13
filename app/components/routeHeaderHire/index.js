import React, { Component } from 'react';
import Icon, { types as iconTypes } from '../../components/icon';
import './styles.css';

export default class RouteHeaderHire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  render() {
    return (
      <div
        className="site-header--hire"
        onClick={() => this.setState({
          isActive: !this.state.isActive
        })}
      >
        <div className="site-header--hire-label">
          <span className="site-header--hire-label-text">Hire Me</span>
        </div>
        {this.state.isActive ? (
          <div className="site-header--hire-popover">
            <small>Available starting September 2017</small>
            <div className="availability-buttons">
              <a
                href="mailto:patrick@pburtchaell.com"
                target="_blank"
                className="button button-inline button-small"
                title="Patrick Burtchaell on email"
              >
                Email
              </a>
              <a
                href="https://m.me/pburtchaell"
                target="_blank"
                className="button button-inline button-small"
                title="Patrick Burtchaell on Facebook Messenger"
              >
                <Icon
                  type={iconTypes.MESSENGER}
                  fill="#0063B5"
                />
                Messenger
              </a>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
