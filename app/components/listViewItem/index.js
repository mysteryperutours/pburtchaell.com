import React from 'react';
import { Link } from 'react-router';
import Column from '../column';
import './styles.css';

type Props = {
  children?: any,
  linkTo?: string
}

const ListViewItem = ({ children, linkTo, ...props }: Props) => {
  function renderInner() {
    return (
      <div className="list-view-item" {...props}>
        {children}
      </div>
    );
  }

  return (
    <Column size={6} className="list-view-item-container">
      {linkTo ? (
        <Link to={linkTo}>{renderInner()}</Link>
      ) : renderInner()}
    </Column>
  );
};

export default ListViewItem;
