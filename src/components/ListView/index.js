import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './styles.css';

/*
 * Function: ListViewItem
 * Description: Renders the title, tags and year of a list view item
 */
const ListViewItemDetails = ({ title, category, date }) => (
  <div className="list-view-item">
    <div className="list-view-item-title">
      {title}
    </div>
    <div className="list-view-item-details">
      <small>{category} &mdash; {date}</small>
    </div>
  </div>
);

ListViewItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

/*
 * Function: ListViewItem
 * Description: Renders a single linked item in a list of items
 */
const ListViewItem = (props) => {
  const {
    title,
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
        category={category}
        date={date}
      />
    </Link>
  );
};

ListViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default ListViewItem;
