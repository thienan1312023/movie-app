/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import SearchReducer from './reducer';
import SearchContext from './context';

const initialState = {
  movieList: [],
  tvShowList: [],
  collections: [],
  persons: [],
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider value={{
      state,
      dispatch,
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

