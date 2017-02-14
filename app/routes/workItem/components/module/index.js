import React, { Element, Children } from 'react';
import createChildElement from './support/createChildElement';
import types from './support/types';
import Row from '../../../../components/row';
import Column from '../../../../components/column';
import './styles.less';

type Props = {
  children: Array<*>,
  type: string
};

const Module = (props: Props): Element<*> => {
  const children = Children.toArray(props.children.map(createChildElement));

  let innerElement;

  if (props.type === types.MODULE_MEDIA_FULL_WIDTH) {
    innerElement = children;
  } else {
    innerElement = (
      <Column size={8} offset={2}>
        {children}
      </Column>
    );
  }

  return (
    <Row
      elementType="section"
      className={`case-study-module ${props.type}`}
    >
      {innerElement}
    </Row>
  );
};

export default Module;
