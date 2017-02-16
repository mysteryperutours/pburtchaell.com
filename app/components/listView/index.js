import React, { createElement, Element } from 'react';
import ListViewItem from '../listViewItem';
import Row from '../row';
import * as layoutTypes from './types';
import './styles.css';

type Props = {
  containerStyle?: object,
  isPending: boolean,
  items: array<object>,
  itemStyle: object,
  layoutType: layoutTypes.GRID | layoutTypes.LIST,
  listViewItem?: Element<*>,
  title?: string
}

function renderListViewItem(item, type): Element<*> {
  return createElement(type, {
    ...item,
    key: item.id
  });
}

const ListView = ({ layoutType, ...props }: Props): Element<*> => {
  const className = `list-view list-view-type-${layoutType.toLowerCase()}`;
  const pendingElements = [0, 1, 2];

  return (
    <Row
      className={className}
      defaultColumn={false}
      style={props.containerStyle}
    >
      {props.isPending ? pendingElements.map(el => {
        return (
          <ListViewItem
            key={el}
            isPending={true}
          />
        );
      }) : props.items.map(item => renderListViewItem(item, props.listViewItem))}
    </Row>
  );
};

ListView.defaultProps = {
  listViewItem: ListViewItem,
  layoutType: layoutTypes.GRID,
  itemStyle: {}
};

export { ListView as default, layoutTypes as types };
