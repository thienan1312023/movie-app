import React from 'react';
import SearchItem from '../SearchItem';

const SearchList = ({ movies }) => {
    return movies?.length > 0 && movies.map((movie) =>
        <SearchItem key={movie.id} movie={movie} />
    );
}

export default SearchList;