import React, { Element } from 'react';
import ListViewItem from './index';

const renderListView = (items): Element<*> => {
  return items.map(item => {
    return (
      <ListViewItem
        key={item.id}
        title={item.title}
        tags={item.tags}
        year={item.year}
        isNew={item.isPromoted}
        isComingSoon={false}
        linkTo={`/work/${item.year}/${item.pathname}`}
        color={item.color}
        style={{
          backgroundImage: `url(${item.featuredImage.url})`,
          backgroundColor: item.color
        }}
      />
    );
  });
};

export default renderListView;
