import React from 'react';
import MovieDetail from '../../components/MovieDetail';
import ModalMovie from '../../components/ModalMovie';
import { MovieDetailProvider } from '../../store/MovieDetail';
function MovieDetailContainer() {
    return (
        <MovieDetailProvider>
            <MovieDetail />
            <ModalMovie />
        </MovieDetailProvider>
    );
}
export default MovieDetailContainer;