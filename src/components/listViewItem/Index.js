import React from 'react';
import Link from 'gatsby-link';
import Column from '../column';
import classNames from 'classnames';
import './styles.css';

const ListViewItem = ({ children, linkTo, isPending, ...props }) => {
  function renderInner() {
    return (
      <div
        className={classNames('list-view-item', {
          'is-pending': isPending,
          'is-coming-soon': props.isComingSoon
        })}
      >
        <div className={classNames('list-view-item-title', {
          'is-new': props.isNew,
          'is-coming-soon': props.isComingSoon
        })}>
          {props.title}
        </div>
        <div className="list-view-item-tags">
          <ul>
            {isPending ? null : props.tags.map(tag => (
              <li key={tag}>
                <small>{tag}</small>
              </li>
            ))}
          </ul>
          {isPending ? null : (
            <span><small> &mdash; {props.year}</small></span>
          )}
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
    <Column
      largeSize={6}
      smallSize={12}
      className="list-view-item-container"
    >
      {!props.isComingSoon && linkTo ? (
        <Link
          to={linkTo}
          title={props.title}
        >
          {renderInner()}
        </Link>
      ) : renderInner()}
    </Column>
  );
};

export default ListViewItem;
