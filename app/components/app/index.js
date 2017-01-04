// @flow
import React, { Element } from 'react';

type Props = {
  children: Element<*>
}

const AppRoot = (props: Props) => (
  <div className="app-root">
    {props.children}
  </div>
);

export default AppRoot;
