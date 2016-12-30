import React, { createElement, Element } from 'react';
import Row from '../../../../components/row';
import Column from '../../../../components/column';
import Text from '../../../../components/text';
import Image from '../../../../components/image';

type Props = {
  children: Array<*>,
  type: string
};

const types: Object = {
  MODULE_MEDIA: 'module_media',
  MODULE_TEXT: 'module_text',
  MODULE_MEDIA_FULL_WIDTH: 'module_media_full_width',
  MODULE_MEDIA_LEFT: 'module_media_left',
  MODULE_MEDIA_RIGHT: 'module_media_right'
};

// Each module type has a specific class name
const classNames: Object = {
  [types.MODULE_TEXT]: 'text',
  [types.MODULE_MEDIA]: 'media',
  [types.MODULE_MEDIA_FULL_WIDTH]: 'media-full-width',
  [types.MODULE_MEDIA_LEFT]: 'media-align-left',
  [types.MODULE_MEDIA_RIGHT]: 'media-align-right'
};

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

// Create a new element for the children of the module.
function createChildElement(child): Element<*> {
  return createElement(getChildElementType(child.type), {
    key: child.key,
    ...(child.meta ? Object.assign(child.meta, {
      width: '100%',
      height: 'auto'
    }) : {})
  }, child.children);
}

// Get the module class name
function getClassName(type: string): string {
  for (const key in types) {
    if (type === types[key]) {
      return classNames[type];
    }
  }

  throw new Error('Class name not assigned to module');
}

const Module = (props: Props): Element<*> => (
  <Row
    elementType="section"
    className={`case-study-module-type-${getClassName(props.type)}`}
  >
    <Column size={8} offset={2}>
      {props.children.map(createChildElement)}
    </Column>
  </Row>
);

export default Module;
