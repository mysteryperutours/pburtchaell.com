import React, { Element, Children } from 'react';
import classNames from 'classnames';
import Row from '../../../../components/row';
import Column from '../../../../components/column';

type Props = {
  children: Array<*>,
  type: string
};

const Module = (props: Props): Element<*> => {
  let childElement;

  if (props.type === 'module-image') {
    childElement = (
      <Column>
        <figure className="figure">
          <img
            src={props.url}
            alt={''} /* TODO */
          />
          {props.description ? (
            <figcaption>
              {props.description}
            </figcaption>
          ) : null}
        </figure>
      </Column>
    );
  }

  return (
    <Row size="large" className={classNames('case-study-module', props.type)}>
      {childElement}
    </Row>
  );
};

export default Module;
