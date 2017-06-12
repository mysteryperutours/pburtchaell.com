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
  let childElement;
  let rowSize = 'default';
  let { propsFromJSON } = props;

  if (propsFromJSON === undefined) {
    propsFromJSON = {};
  }

  if (props.type === 'module-image') {
    childElement = (
      <Column>
        <figure className="figure">
          <img
            src={propsFromJSON.url}
            alt={propsFromJSON.alt}
          />
          {propsFromJSON.caption ? (
            <figcaption>
              {propsFromJSON.caption}
            </figcaption>
          ) : null}
        </figure>
      </Column>
    );
  } else if (props.type === 'module-image-large') {
    rowSize = 'medium';

    childElement = (
      <Column>
        <figure className="figure">
          <img
            src={propsFromJSON.url}
            alt={propsFromJSON.alt}
          />
          {propsFromJSON.caption ? (
            <figcaption>
              {propsFromJSON.caption}
            </figcaption>
          ) : null}
        </figure>
      </Column>
    );
  } else if (props.type === 'module-text') {
    childElement = (
      <Column>
        {propsFromJSON.title ? (
          <h2 className="case-study-module--title">
            {propsFromJSON.title}
          </h2>
        ) : null}
        {Children.toArray(props.children.map(createChildElement))}
      </Column>
    );
  } else {
    childElement = (
      <Column>
        {Children.toArray(props.children.map(createChildElement))}
      </Column>
    );
  }

  return (
    <Row size={rowSize} className={classNames('case-study-module', props.type)}>
      {childElement}
    </Row>
  );
};

export default Module;
