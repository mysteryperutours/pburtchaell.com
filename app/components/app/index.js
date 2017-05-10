// @flow
import React, { Element } from 'react';

type Props = {
  children: Element<*>
}

const AppRoot = (props: Props) => {
  window.scrollTo(0, 0);

  return (
    <div className="app-root">
      {props.children}
    </div>
  );
}

export default AppRoot;
