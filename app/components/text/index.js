// @flow
import { createElement, Element } from 'react';
import { Link, IndexLink } from 'react-router';
import * as types from './types';
import paths from '../../routes/paths';
import './styles.css';

type Props = {
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  linkTo?: string,
  type: types.HEADER_1 | types.HEADER_2 | types.HEADER_3 | types.BODY
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
  let elementType: Link | IndexLink | string;

  if (linkTo) {
    if (linkTo === paths.INDEX) {
      elementType = IndexLink;
    } else {
      elementType = Link;
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
      activeClassName: 'is-active'
    } : {}),
    props.children
  );
};

Text.defaultProps = {
  type: types.BODY
};

export { Text as default, types };
