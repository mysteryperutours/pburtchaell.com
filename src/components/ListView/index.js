import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './styles.css';

/*
 * Function: ListViewItem
 * Description: Renders the title, tags and year of a list view item
 */
const ListViewItemDetails = ({ title, excerpt, category, date }) => (
  <article className="list-view-item">
    <div className="list-view-item-title">
      {title}
    </div>
    <div className="list-view-item-details">
      {excerpt && (
        <div className="list-view-item-excerpt">
          {excerpt}
        </div>
      )}
      <small>{category} &mdash; {date}</small>
    </div>
  </article>
);

ListViewItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

ListViewItemDetails.defaultProps = {
  excerpt: null,
};

/*
 * Function: ListViewItem
 * Description: Renders a single linked item in a list of items
 */
const ListViewItem = (props) => {
  const {
    title,
    excerpt,
    category,
    date,
    linkTo,
  } = props;

  return (
    <Link
      to={linkTo}
      title={title}
    >
      <ListViewItemDetails
        title={title}
        excerpt={excerpt}
        category={category}
        date={date}
      />
    </Link>
  );
};

ListViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

ListViewItem.defaultProps = {
  excerpt: null,
};

export default ListViewItem;
