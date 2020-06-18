import React from 'react';

export const MovieDetailContext = React.createContext(null);
export const MovieDetailProvider = ({ children }) => {
    const [isOpenWatchModel, setIsOpenWatchModal] = React.useState(false);
    const [urlMovieWatch, setUrlMovieWatch] = React.useState('');

    const store = {
        OpenWatchModel: {isOpenWatchModel, setIsOpenWatchModal},
        MovieWatch: {urlMovieWatch, setUrlMovieWatch}
    };

    return (
        <MovieDetailContext.Provider value={store}>{children}</MovieDetailContext.Provider>
    );
};