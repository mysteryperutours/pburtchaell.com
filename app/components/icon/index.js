// @flow
import React from 'react';
import * as paths from './paths';
import './styles.css';

type Props = {
  type: string
}

function getPath(type) {
  switch (type) {
    case 'github':
      return paths.GITHUB;
    case 'twitter':
      return paths.TWITTER;
    case 'facebook':
      return paths.FACEBOOK;
    default:
      throw new Error('Path not found');
  }
}

const Icon = ({ type, ...props }: Props) => (
  <span className="icon">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
      enableBackground="new 0 0 20 20"
      {...props}
    >
      <path
        d={getPath(type)}
      />
    </svg>
  </span>
);

export default Icon;
