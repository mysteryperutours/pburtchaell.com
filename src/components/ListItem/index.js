import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './styles.css';

/*
 * Function: ListItem
 * Description: Renders the title, tags and year of a list view item
 */
const ListItemDetails = ({ title, excerpt, category, date }) => (
  <article className="list-item">
    <p className="list-item__title">
      {title}
    </p>
    <div className="list-item__details">
      <small>
        <span className="list-item__details-category">{category}</span>
        <time className="list-item__details-year">{date}</time>
      </small>
      {excerpt && (
        <p className="list-item__details-excerpt">
          {excerpt}
        </p>
      )}
    </div>
  </article>
);

ListItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

ListItemDetails.defaultProps = {
  excerpt: null,
};

/*
 * Function: ListViewItem
 * Description: Renders a single linked item in a list of items
 */
const ListItem = (props) => {
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
      className="list-item__link"
    >
      <ListItemDetails
        title={title}
        excerpt={excerpt}
        category={category}
        date={date}
      />
    </Link>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  excerpt: null,
};

export default ListItem;
