import {TheMovieDB, API_KEY} from './constants';

export const getDetailTV = (movie_id) => {
    return fetch(`${TheMovieDB}/movie/${movie_id}?api_key=${API_KEY}`);
}
