import React from 'react';
import {MovieDetailContext} from './context';

export const MovieDetailProvider = ({ children }) => {
    const [isOpenWatchModel, setIsOpenWatchModal] = React.useState(false);
    const [urlMovieWatch, setUrlMovieWatch] = React.useState('');

    const store = {
        OpenWatchModel: { isOpenWatchModel, setIsOpenWatchModal },
        MovieWatch: { urlMovieWatch, setUrlMovieWatch }
    };

    return (
        <MovieDetailContext.Provider value={store}>{children}</MovieDetailContext.Provider>
    );
};