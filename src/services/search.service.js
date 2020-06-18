import { API_KEY } from './constants';

const search = (query, pageNumber) => fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`);

export default search;