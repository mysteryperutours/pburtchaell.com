import { createElement, Element } from 'react';
import Text from '../../../../../components/text';

// Get the child element type
function getChildElementType(type) {
  switch (type) {
    case 'text':
      return Text;
    case 'video':
      return 'video';
    default:
      return 'div';
  }
}

function getChildElementProps(type, meta) {
  switch (type) {
    case 'video':
      return {
        ...meta,
        width: '100%',
        autoPlay: true,
        playsInline: true,
        loop: true
      };
    default: return meta;
  }
}

/**
 * @function createChildElement
 * @description Create a new element for a child descried as a data object.
 */
function createChildElement(child): Element<*> {
  const { children } = child;

  return createElement(
    getChildElementType(child.type),
    getChildElementProps(child.type, child.props),
    Array.isArray(children) ? children.map(createChildElement) : children
  );
}

export default createChildElement;
