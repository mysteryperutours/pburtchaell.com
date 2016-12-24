// @flow
import { createElement, Element } from 'react';
import * as types from './types';

type Props = {
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  type: types.HEADER_1 | types.HEADER_2 | types.HEADER_3 | types.BODY
};

const Text = ({ type = types.BODY, ...props }: Props): Element<*> => {
  /**
   * Text components are rendered with certain styles, applied by CSS
   * classes. This function evalutates the props given to the component
   * and returns the appropriate className string.
   */
  function getClassName(): string {
    const classNames = [];

    if (type === types.BODY) classNames.push(['text--body']);

    return classNames.join(' ');
  }

  return createElement(type, {
    children: props.children,
    className: getClassName(props)
  });
};

export { Text as default, types };
