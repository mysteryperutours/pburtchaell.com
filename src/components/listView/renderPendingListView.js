import React, { Element, Children } from 'react';
import ListViewItem from './index';

const renderPendingListView = (): Element<*> => {
  return Children.toArray([0,0,0].map(item => {
    return (
      <ListViewItem
        isPending
      />
    );
  }));
};

export default renderPendingListView;
