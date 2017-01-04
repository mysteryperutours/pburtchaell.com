import { createElement, Element } from 'react';
import Text from '../../../../../components/text';
import Image from '../../../../../components/image';

// Get the child element type
function getChildElementType(type) {
  switch (type) {
    case 'text':
      return Text;
    case 'image':
      return Image;
    default:
      return 'div';
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
    {
      ...(child.meta ? child.meta : {})
    },
    Array.isArray(children) ? children.map(createChildElement) : children
  );
}

export default createChildElement;
