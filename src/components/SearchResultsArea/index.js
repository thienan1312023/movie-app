/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import Pagination from 'react-js-pagination';
import { Spinner } from 'reactstrap';
import Header from '../Header';
import SearchBar from '../SearchBar';
import {UtilsContext} from '../../store/Utils';
import {SearchContext} from '../../store/Search';
import search from '../../services/search.service';
import SearchList from './SearchList';
import styles from './styles.scss';

const SearchPage = () => {
  const { getQueryParam } = useContext(UtilsContext);
  const { state, dispatch } = useContext(SearchContext);
  const query = getQueryParam('query');

  const [movieList, setMovieList] = useState();
  const [pageNumber, setPageNumber] = useState(movieList?.page || 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
    }
    search(query, pageNumber)
      .then((res) => res.json())
      .then(
        (response) => {
          dispatch({ type: 'setMovieList', payload: { movieList: response } });
          setLoading(false);
        },
      );
  }, [query, pageNumber, dispatch]);

  useEffect(() => {
    setMovieList(state?.movieList);
  }, [state, state.movieList]);
  return (
    <>
      {(query && movieList?.results?.length > 0)
        ? (
          <>
            <Header />
            <SearchBar isLandingPage={false} />
            {loading
              ? (
                <div className={styles.loading}>
                  <Spinner style={{ width: '3rem', height: '3rem' }} />
                </div>
              )
              : (
                <div className={styles.movieCardContainer}>
                  <SearchList movies={movieList?.results}/>
                  <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={movieList?.page}
                    itemsCountPerPage={20}
                    totalItemsCount={movieList?.total_results}
                    pageRangeDisplayed={movieList?.total_pages < 5 ? movieList.total_pages : 5}
                    onChange={(pageNum) => { setPageNumber(pageNum); }}
                  />
                </div>
              )}
          </>
        ) : (
          <>
            <Header />
            <SearchBar isLandingPage={false} />
            <div className={styles.noContent}>
              There are no movies that matched your query.
            </div>
          </>
        )}
    </>
  );
};

export default SearchPage;
