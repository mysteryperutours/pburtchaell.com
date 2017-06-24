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

  if (props.type === 'image') {
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
  } else if (props.type === 'video') {
    childElement = (
      <Column>
        <figure className="figure">
          <video src={props.url} autoPlay={true} type={props.contentType}>
            Sorry, your browser doesn't support embedded videos,
  but, you can <a href={props.url} target="_blank">download it</a>.
          </video>
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
