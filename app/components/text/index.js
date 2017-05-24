// @flow
import React, { createElement, Element } from 'react';
import { Link } from 'react-router-dom';
import * as types from './types';
import paths from '../../routes/paths';

type Props = {
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  linkTo?: string,
  type: types.HEADER_1 | types.HEADER_2 | types.HEADER_3 | types.BODY | types.SMALL
};

const Text = (props: Props): Element<*> => {
  const { linkTo, type, ...newProps } = props;

  /**
   * The Text component can renderer both text elements, e.g., <p> and <h1>,
   * and links.
   *
   * If the `linkTo` property is included on the component, the `Link`
   * component from React Router will be rendered.
   */
  let elementType: Link | string;
  let children;

  if (linkTo) {
    elementType = Link;
  } else {
    elementType = type;
  }

  if (elementType === types.SMALL) {
    children = (
      <small>
        {props.children}
      </small>
    );
  } else {
    children = props.children;
  }

  return createElement(
    elementType,
    Object.assign({
      ...newProps,
      style: newProps.style
    }, linkTo ? {
      to: linkTo,
      exact: linkTo === paths.INDEX,
      activeClassName: 'is-active'
    } : {}),
    children
  );
};

Text.defaultProps = {
  type: types.BODY
};

export { Text as default, types };
