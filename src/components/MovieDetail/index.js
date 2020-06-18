import React, { useState, useEffect } from 'react';
import { MovieDetailContext } from '../../store/MovieDetail';
import { getDetailTV } from '../../services/TVDetail.service';
import { BackdropImage, PosterAvatar } from '../../services/constants';
import { useParams } from 'react-router-dom';

import './styles.scss';

const MovieDetail = ({ movie_id }) => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { OpenWatchModel } = React.useContext(MovieDetailContext);
    const { MovieWatch } = React.useContext(MovieDetailContext);
    useEffect(() => {
        getDetailTV(id)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);
    const getYear = (date) => {
        const newDate = new Date(date);
        return newDate.getFullYear();
    }
    const openMovie = (url, title) => {
        
    }
    return (
        <div className="movie-detail-container" style={{ backgroundImage: movie && movie.backdrop_path && `url(${BackdropImage}${movie.backdrop_path})` }}>
            {
                movie && movie.backdrop_path && <div className="movie-detail">
                    <div className="movie-avatar">
                        <img src={`${PosterAvatar}${movie.poster_path}`} alt="avatar" />
                    </div>
                    <div className="movie-description">
                        <div className="movie-description__title">
                            <span className="movie-description__title__main">{movie.title}</span>
                            <span className="movie-description__title__release-date">({getYear(movie.release_date)})</span>
                        </div>

                        <div className="movie-description__control">
                            <div className="movie-description__control__rate">{movie.vote_average}%</div>
                            <div className="movie-description__control__rate--explain">User Score</div>
                        </div>
                        <div className="movie-description__play-trailer" onClick={openMovie}>
                            <i className="fa fa-play" aria-hidden="true"></i>
                            <span>Play Trailer</span>
                        </div>
                        <div className="movie-description__tagline">{movie.tagline}</div>
                        <div className="movie-description__over-view">
                            <div className="movie-description__over-view__title">Overview</div>
                            <div className="movie-description__over-view__content">{movie.overview}</div>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
}

export default MovieDetail;