import React from 'react';
import Icon, { types } from '../icon';
import './styles.css';

const SocialLinks = () => (
  <ul className="social-links-list">
    <li className="social-links-list-item">
      <a
        className="social-links-list-item-anchor"
        href="https://facebook.com/pburtchaell"
        title="Patrick Burtchaell on Facebook"
      >
        <Icon
          type={types.FACEBOOK}
          fill="#0063B5"
        />
        <span className="about-links-list-item-label">
          Facebook
        </span>
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        className="social-links-list-item-anchor"
        href="https://twitter.com/pburtchaell"
        title="Patrick Burtchaell on Twitter"
      >
        <Icon
          type={types.TWITTER}
          fill="#0063B5"
        />
        <span className="about-links-list-item-label">
          Twitter
        </span>
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        className="social-links-list-item-anchor"
        href="https://github.com/pburtchaell"
        title="Patrick Burtchaell on GitHub"
      >
        <Icon
          type={types.GITHUB}
          fill="#0063B5"
        />
        <span className="about-links-list-item-label">
          GitHub
        </span>
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        className="social-links-list-item-anchor"
        href="https://dribbble.com/pburtchaell"
        title="Patrick Burtchaell on Dribbble"
      >
        <Icon
          type={types.DRIBBBLE}
          fill="#0063B5"
        />
        <span className="about-links-list-item-label">
          Dribbble
        </span>
      </a>
    </li>
    <li className="about-links-list-item">
      <a
        className="social-links-list-item-anchor"
        href="mailto:patrick@pburtchaell.com"
        title="Patrick Burtchaell on Email"
      >
        <span className="about-links-list-item-label">
          patrick@pburtchaell.com
        </span>
      </a>
    </li>
  </ul>
);

export default SocialLinks;
