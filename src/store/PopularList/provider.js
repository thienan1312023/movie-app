import React, {useState} from 'react';
import { PopularContext } from './context';

export const PopularProvider = ({ children }) => {
  
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [popularTVList, setPopularTVList] = useState([]);
  const [isMovie, setIsMovie] = useState(true);

  const store = {
    movieList: { popularMovieList, setPopularMovieList },
    tvList: { popularTVList, setPopularTVList },
    typeOfVideo: {isMovie, setIsMovie}
  }

  return (
    <PopularContext.Provider value={store}>
      {children}
    </PopularContext.Provider>
  );
};