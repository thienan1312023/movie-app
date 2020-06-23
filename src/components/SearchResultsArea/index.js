/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import Pagination from 'react-js-pagination';
import { Spinner } from 'reactstrap';
import Header from '../Header';
import SearchBar from '../SearchBar';
import {UtilsContext} from '../../store/Utils';
import {SearchContext} from '../../store/Search';
import SearchCategories from '../SearchCategories';
import searchAll from '../../services/search.service';
import SearchList from './SearchList';
import './styles.scss';

const SearchResultsArea = () => {
  const { getQueryParam } = useContext(UtilsContext);
  const { state, dispatch } = useContext(SearchContext);
  const query = getQueryParam('query');

  const [renderList, setRenderList] = useState();
  const [filterTag, setFilterTag] = useState('movie');
  const [pageNumber, setPageNumber] = useState(renderList?.page || 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
    }
    searchAll({ query, pageNumber }, dispatch, setLoading);
  }, [query, pageNumber, dispatch]);

  useEffect(() => {
    console.log('state ne', state)
    switch (filterTag) {
      case 'movie':
        setRenderList(state?.movieList);
        break;
      case 'tv':
        setRenderList(state?.tvShowList);
        break;
      case 'collection':
        setRenderList(state?.collections);
        break;
      case 'persons':
        setRenderList(state?.persons);
        break;
      default:
        break;
    }
  }, [state, state.movieList, state.tvShowList,
    state.collections, state.persons, filterTag]);

  const onClickSearch = () => {
    setFilterTag('movie');
    setPageNumber(1);
  };

  const onSelectCategory = (tag) => {
    setFilterTag(tag);
    setPageNumber(1);
  };

  return (
    <>
      <Header />
      <SearchBar
        isLandingPage={false}
        onClickSearch={onClickSearch}
      />
      {loading
        ? (
          <div className="loading">
            <Spinner className="loading__spinner" />
          </div>
        )
        : (
          <div className="searchContainer">
            <div className="searchContainer__inner">
              <SearchCategories
                onSelectCategory={onSelectCategory}
                selectedCategory={filterTag}
                movieCount={state?.movieList?.total_results}
                tvCount={state?.tvShowList?.total_results}
                personCount={state?.persons?.total_results}
                collectionCount={state?.collections?.total_results}
              />
              {(query && renderList?.results?.length > 0)
                ? (
                  <div className="movieCardContainer">
                    <SearchList renderList={renderList} selectedTag={filterTag} />
                    <Pagination
                      itemClass="page-item"
                      linkClass="page-link"
                      activePage={renderList?.page}
                      itemsCountPerPage={20}
                      totalItemsCount={renderList?.total_results}
                      pageRangeDisplayed={renderList?.total_pages < 5
                        ? renderList.total_pages
                        : 5}
                      onChange={(pageNum) => { setPageNumber(pageNum); }}
                    />
                  </div>
                ) : (
                  <div className="noContent">
                    There are no movies that matched your query.
                  </div>
                )}
            </div>
          </div>
        )}
    </>
  );
};

export default SearchResultsArea;