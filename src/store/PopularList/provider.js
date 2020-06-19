import React, {useState, useEffect} from 'react';
import { PopularContext } from './context';

export const PopularProvider = ({ children }) => {
  
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [popularTVList, setPopularTVList] = useState([]);
  const [isMovie, setIsMovie] = useState(false);

  useEffect(() => {
    console.log('is movie', isMovie)
  }, [isMovie]);

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