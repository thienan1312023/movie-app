import React, {useState} from 'react';
import {MovieDetailContext} from './context';

export const MovieDetailProvider = ({ children }) => {
    const [isOpenWatchModel, setIsOpenWatchModal] = useState(false);
    const [urlMovieWatch, setUrlMovieWatch] = useState('');

    const store = {
        OpenWatchModel: { isOpenWatchModel, setIsOpenWatchModal },
        MovieWatch: { urlMovieWatch, setUrlMovieWatch }
    };

    return (
        <MovieDetailContext.Provider value={store}>{children}</MovieDetailContext.Provider>
    );
};