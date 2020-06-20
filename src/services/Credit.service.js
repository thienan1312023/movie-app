import {TheMovieDB, API_KEY} from './constants';

export const getMovieCredits = (movie_id) => {
    return fetch(`${TheMovieDB}/movie/${movie_id}/credits?api_key=${API_KEY}`);
}

export const getTVCredits = (tv_id) => {
    return fetch(`${TheMovieDB}/tv/${tv_id}/credits?api_key=${API_KEY}`);
}