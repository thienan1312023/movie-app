import {TheMovieDB, API_KEY} from './constants';

export const getDetailTV = (tv_id) => {
    return fetch(`${TheMovieDB}/tv/${tv_id}?api_key=${API_KEY}`);
}

