import React from 'react';
import { Link } from 'react-router';
import Column from '../column';
import styles from './styles.less';

type Props = {
  children?: any,
  linkTo?: string,
  isPending?: boolean
}

const ListViewItem = ({ children, linkTo, isPending, ...props }: Props) => {
  function renderInner() {
    return (
      <div className={`list-view-item${isPending ? ' is-pending' : ''}`}>
        <div className="list-view-item-title">
          {props.title}
        </div>
        <div className="list-view-item-preview">
          <div className="list-view-item-preview-image" style={props.style}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Column size={6} className="list-view-item-container">
      {linkTo ? (
        <Link to={linkTo} title={props.title}>{renderInner()}</Link>
      ) : renderInner()}
    </Column>
  );
};

export default ListViewItem;
