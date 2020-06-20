import { TheMovieDB, API_KEY } from "./constants";

export const getTVRecommendations = (tv_id) => {
  return fetch(`${TheMovieDB}/tv/${tv_id}/recommendations?api_key=${API_KEY}`);
};

export const getMovieRecommendations = (movie_id) => {
  return fetch(`${TheMovieDB}/movie/${movie_id}/recommendations?api_key=${API_KEY}`);
};
