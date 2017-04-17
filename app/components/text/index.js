// @flow
import { createElement, Element } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as types from './types';
import paths from '../../routes/paths';
import './styles.css';

type Props = {
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  linkTo?: string,
  navLink?: string,
  type: types.HEADER_1 | types.HEADER_2 | types.HEADER_3 | types.BODY
};

const Text = (props: Props): Element<*> => {
  const { linkTo, navLink, type, ...newProps } = props;

  /**
   * The Text component can renderer both text elements, e.g., <p> and <h1>,
   * and links.
   *
   * If the `linkTo` property is included on the component, the `Link`
   * component from React Router will be rendered.
   */
  let elementType: Link | NavLink | string;

  if (linkTo) {
    elementType = Link;

    if (navLink) {
      elementType = NavLink;
    }
  } else {
    elementType = type;
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
    props.children
  );
};

Text.defaultProps = {
  type: types.BODY
};

export { Text as default, types };
