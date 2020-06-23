/* eslint-disable react/prop-types */
import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import numberWithCommas from '../../utils/numberWithCommas';
import './styles.scss';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line arrow-body-style
const SearchCategories = ({
  onSelectCategory, movieCount = 0,
  tvCount = 0, collectionCount = 0,
  personCount = 0, selectedCategory,
}) => (
  <div className="categoryContainer">
    <ListGroup className="categoryTable">
      <ListGroupItem active className="categoryTable__item__title">
        Search Results
      </ListGroupItem>
      <ListGroupItem
        className={[
          "categoryTable__item",
          selectedCategory === 'movie' && "selected",
        ]}
        onClick={() => onSelectCategory('movie')}
      >
        Movies
        <Badge pill className="badge">{numberWithCommas(movieCount)}</Badge>
      </ListGroupItem>
      <ListGroupItem
        className={[
          "categoryTable__item",
          selectedCategory === 'persons' && "selected",
        ]}
        onClick={() => onSelectCategory('persons')}
      >
        People
        <Badge pill className="badge">{numberWithCommas(personCount)}</Badge>
      </ListGroupItem>
      <ListGroupItem
        className={[
          "categoryTable__item",
          selectedCategory === 'tv' && "selected",
        ]}
        onClick={() => onSelectCategory('tv')}
      >
        TV Shows
        <Badge pill className="badge">{numberWithCommas(tvCount)}</Badge>
      </ListGroupItem>
      <ListGroupItem
        className={[
          "categoryTable__item__last",
          selectedCategory === 'collection' && "selected",
        ]}
        onClick={() => onSelectCategory('collection')}
      >
        Collections
        <Badge pill className="badge">{numberWithCommas(collectionCount)}</Badge>
      </ListGroupItem>
    </ListGroup>
    <p className="searchTip">
      <span className="searchTip__icon" />
      Tip: You can use the `y:` filter to narrow your results by year. Example: `star wars y:1977`.
    </p>
  </div>
);

export default SearchCategories;
