// @flow
import React from 'react';
import * as paths from './paths';
import * as types from './types';
import styles from './styles.css';

type Props = {
  type: string
}

function getPath(type) {
  switch (type) {
    case types.GITHUB:
      return paths.GITHUB;
    case types.TWITTER:
      return paths.TWITTER;
    case types.FACEBOOK:
      return paths.FACEBOOK;
    case types.DRIBBBLE:
      return paths.DRIBBBLE;
    case types.MESSENGER:
      return paths.MESSENGER;
    default:
      throw new Error('Path not found');
  }
}

const Icon = ({ type, ...props }: Props) => (
  <span className={styles.icon}>
    <svg
      fill={props.fill}
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

export { Icon as default, paths, types };
