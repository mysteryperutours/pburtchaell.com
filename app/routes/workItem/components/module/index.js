import React, { Element, Children } from 'react';
import classNames from 'classnames';
import createChildElement from './support/createChildElement';
import types from './support/types';
import Text, { types as textTypes } from '../../../../components/text';
import Row from '../../../../components/row';
import Column from '../../../../components/column';
import Slider from './components/slider';
import './styles.less';

type Props = {
  children: Array<*>,
  type: string,
  propsFromJSON?: {
    title?: string,
    subtitle?: string
  }
};

const Module = (props: Props): Element<*> => {
  let childElement;
  let headerElement;
  let rowSize;

  // Props provided by the database
  if (props.propsFromJSON) {
    headerElement = (
      <Row largeSize={12} className="case-study-module--header">
        {props.propsFromJSON.title ? (
          <Text
            type={textTypes.HEADER_2}
          >
            {props.propsFromJSON.title}
          </Text>
        ) : null}
        {props.propsFromJSON.subtitle ? (
          <Text
            type={textTypes.HEADER_5}
          >
            {props.propsFromJSON.subtitle}
          </Text>
        ) : null}
      </Row>
    );
  }



  if (props.type === types.MODULE_MEDIA_FULL_WIDTH) {
    rowSize = 'full';
  } else if (props.type === types.MODULE_MEDIA) {
    rowSize = 'medium';
  } else {
    rowSize = 'small';
  }

  if (props.type === types.MODULE_SLIDER) {
    rowSize = 'medium';

    childElement = (
      <Column largeSize={12} smallSize={12}>
        <Slider
          {...props}
        />
      </Column>
    );
  } else {
    childElement = (
      <Column largeSize={12} smallSize={12}>
        {Children.toArray(props.children.map(createChildElement))}
      </Column>
    );
  }

  return (
    <Row
      elementType="section"
      size={rowSize}
      defaultColumn={false}
      className={classNames('case-study-module', props.type)}
    >
      {headerElement}
      {childElement}
    </Row>
  );
};

export default Module;
