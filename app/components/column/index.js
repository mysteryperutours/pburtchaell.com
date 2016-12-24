// @flow
import React, { Element } from 'react';
import './styles.css';

type Props = {
  className: string,
  children?: any, // @TODO: Use Element<*> once facebook/flow #1964 is closed
  size: string
}

const Column = (props: Props): Element<*> => {
  const classNames = ['column', props.className, props.size];

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
};

export default Column;
