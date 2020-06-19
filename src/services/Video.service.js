import {TheMovieDB, API_KEY} from './constants';

//For tv
export const getTVVideo = (tv_id) => {
    return fetch(`${TheMovieDB}/tv/${tv_id}/videos?api_key=${API_KEY}`);
}

//For movie
export const getMovieVideo = (movie_id) => {
    return fetch(`${TheMovieDB}/movie/${movie_id}/videos?api_key=${API_KEY}`);
}