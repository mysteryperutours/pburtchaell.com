import React, { Element, Children } from 'react';
import classNames from 'classnames';
import createChildElement from './support/createChildElement';
import Row from '../../../../components/row';
import Column from '../../../../components/column';

type Props = {
  children: Array<*>,
  type: string
};

const Module = (props: Props): Element<*> => {
  const childElement = (
    <Column>
      {Children.toArray(props.children.map(createChildElement))}
    </Column>
  );

  return (
    <Row className={classNames('case-study-module', props.type)}>
      {childElement}
    </Row>
  );
};

export default Module;
