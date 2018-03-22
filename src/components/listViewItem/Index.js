import React from 'react'
import Link from 'gatsby-link'
import Column from '../column'
import classNames from 'classnames'
import './styles.css';

const ListViewItemDetials = ({title, tags, date}) => (
  <div lassName="list-view-item">
    <div className="list-view-item-title">
      {title}
    </div>
    <div className="list-view-item-tags">
      <ul>
        {tags && tags.map((tag) => (
          <li key={tag}>
            <small>{tag}</small>
          </li>
        ))}
      </ul>
      <span>
        <small> &mdash; {date}</small>
      </span>
    </div>
  </div>
)

const ListViewItem = (props) => {
  const {
    container,
    title,
    tags,
    date,
    linkTo,
  } = props

  return (
    <Link
      to={linkTo}
      title={title}
    >
      <ListViewItemDetials
        title={title}
        tags={tags}
        date={date}
      />
    </Link>
  )
}

ListViewItem.propTypes = {

}

export default ListViewItem
