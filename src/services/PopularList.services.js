import {TheMovieDB, API_KEY} from './constants';

export const getPopularMovieList = () => {
    return fetch(`${TheMovieDB}/movie/popular?api_key=${API_KEY}`);
}

export const getPopularTVList = () => {
    return fetch(`${TheMovieDB}/tv/popular?api_key=${API_KEY}`);
}