// @flow
import React, { Element } from 'react';
import './styles.css';

type Props = {
  className: string,
  children?: any // @TODO: Use Element<*> once facebook/flow #1964 is closed
}

const Row = (props: Props): Element<*> => {
  const classNames = ['row', props.className];

  return (
    <div className="row-container">
      <div className={classNames.join(' ')}>
        {props.children}
      </div>
    </div>
  );
};

export default Row;
