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

const ListView = ({ listViewItem, layoutType, containerStyle, ...props }: Props) => {
  const className = `list-view list-view-type-${layoutType.toLowerCase()}`;

  const renderItem = item => createElement(listViewItem, {
    ...item,
    key: item.id,
    style: Object.assign(props.itemStyle, item.style)
  });

  return (
    <Row className={className} defaultColumn={false} style={containerStyle}>
      {props.isPending ? (
        <div>Loading...</div>
      ) : props.items.map(renderItem)}
    </Row>
  );
};

ListView.defaultProps = {
  listViewItem: ListViewItem,
  layoutType: layoutTypes.GRID,
  itemStyle: {}
};

export { ListView as default, layoutTypes as types };
