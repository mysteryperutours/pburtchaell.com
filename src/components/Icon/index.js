import React from 'react'
import * as paths from './paths'
import * as types from './types'
import styles from './styles.css'

function getPath(type) {
  let path

  switch (type) {
    case types.GITHUB:
      path = paths.GITHUB
    case types.TWITTER:
      path = paths.TWITTER
    case types.FACEBOOK:
      path = paths.FACEBOOK
    case types.DRIBBBLE:
      path = paths.DRIBBBLE
    case types.MESSENGER:
      path = paths.MESSENGER
  }

  if (!path) {
    throw new Error('Icon Error: SVG path not found.')
  }

  return path
}

/*
 * Function: Icon
 * Description: Renders an SVG icon
 */
const Icon = ({type, ...props}) => (
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
)

export {Icon as default, paths, types}
