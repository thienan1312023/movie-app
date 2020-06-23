import React, { useState, useEffect } from "react";
import { MovieDetailContext } from "../../store/MovieDetail";
import { getDetailTV } from "../../services/TVDetail.service";
import { getDetailMovie } from "../../services/MovieDetail.service";
import { getTVVideo, getMovieVideo } from "../../services/Video.service";
import { BackdropImage, PosterAvatar } from "../../services/constants";
import { useParams } from "react-router-dom";

import "./styles.scss";
const colors = [
  "linear-gradient(to right, rgba(11.76%, 18.43%, 23.53%, 1.00) 150px, rgba(18.82%, 25.49%, 30.59%, 0.84) 100%)",
  "linear-gradient(to right, rgba(12.94%, 25.88%, 11.76%, 1.00) 150px, rgba(20.00%, 32.94%, 18.82%, 0.84) 100%)",
  "linear-gradient(to right, rgba(5.88%, 27.45%, 27.06%, 1.00) 150px, rgba(10.59%, 36.47%, 36.08%, 0.84) 100%)",
  "linear-gradient(to right, rgba(40.00%, 0.78%, 23.53%, 1.00) 150px, rgba(50.98%, 3.92%, 30.98%, 0.84) 100%)",
  "linear-gradient(to right, rgba(11.76%, 18.43%, 23.53%, 1.00) 150px, rgba(18.82%, 25.49%, 30.59%, 0.84) 100%)",
  "linear-gradient(to right, rgba(6.27%, 20.39%, 65.10%, 1.00) 150px, rgba(11.76%, 26.67%, 73.73%, 0.84) 100%)",
  "linear-gradient(to right, rgba(18.04%, 9.41%, 23.14%, 1.00) 150px, rgba(25.10%, 15.69%, 30.59%, 0.84) 100%)",
  "linear-gradient(to right, rgba(13.73%, 18.04%, 14.90%, 1.00) 150px, rgba(21.96%, 23.53%, 22.35%, 0.84) 100%)",
  "linear-gradient(to right, rgba(19.61%, 7.84%, 7.84%, 1.00) 150px, rgba(27.45%, 13.73%, 13.73%, 0.84) 100%)",
  "linear-gradient(to right, rgba(0.00%, 0.00%, 0.00%, 1.00) 150px, rgba(7.06%, 7.06%, 7.06%, 0.84) 100%)",
  "linear-gradient(to right, rgba(20.78%, 15.69%, 11.76%, 1.00) 150px, rgba(27.45%, 22.75%, 19.22%, 0.84) 100%)"
];
const customStyle = (colors) => {
  return {
    backgroundImage: colors[Math.floor(Math.random() * colors.length)],
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
};
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [urlTrailerVideo, setUrlTrailerVideo] = useState("");
  const hrefPaths = window.location.pathname.split("/");
  const isMovie = !!(hrefPaths[1] === "movie");
  const {
    OpenWatchModel: { setIsOpenWatchModal },
  } = React.useContext(MovieDetailContext);
  const {
    MovieWatch: { setUrlMovieWatch },
  } = React.useContext(MovieDetailContext);

  useEffect(() => {
    const pureIds = id && id.split("-");
    //Get Movie Detail
    pureIds?.length > 0 && isMovie
      ? getDetailMovie(pureIds[0])
          .then((response) => response.json())
          .then((data) => setMovie(data))
      : getDetailTV(pureIds[0])
          .then((response) => response.json())
          .then((data) => setMovie(data));

    //Get URL TRAILER VIDIEO
    pureIds?.length > 0 && isMovie
      ? getMovieVideo(pureIds[0])
          .then((response) => response.json())
          .then(
            (data) =>
              data?.results &&
              data?.results.length > 0 &&
              setUrlTrailerVideo(data.results[0].key)
          )
      : getTVVideo(pureIds[0])
          .then((response) => response.json())
          .then(
            (data) =>
              data?.results &&
              data?.results.length > 0 &&
              setUrlTrailerVideo(data.results[0].key)
          );
  }, [id, isMovie]);
  const getYear = (date) => {
    const newDate = new Date(date);
    return newDate.getFullYear();
  };
  const openMovie = () => {
    setIsOpenWatchModal(true);
    setUrlMovieWatch(urlTrailerVideo);
  };
  if (!movie) return <></>;
  if (movie && movie.title) {
    return (
      <div
        className="movie-detail-container"
        style={{
          backgroundImage:
            movie &&
            movie.backdrop_path &&
            `url(${BackdropImage}${movie.backdrop_path})`,
        }}
      >
        <div style={customStyle(colors)}>
          {movie && movie.backdrop_path && (
            <div className="movie-detail">
              <div className="movie-avatar">
                <img src={`${PosterAvatar}${movie.poster_path}`} alt="avatar" />
              </div>
              <div className="movie-description">
                <div className="movie-description__title">
                  <span className="movie-description__title__main">
                    {movie.title}
                  </span>
                  <span className="movie-description__title__release-date">
                    ({getYear(movie.release_date)})
                  </span>
                </div>

                <div className="movie-description__control">
                  <div className="movie-description__control__rate">
                    {movie.vote_average}%
                  </div>
                  <div className="movie-description__control__rate--explain">
                    User Score
                  </div>
                </div>
                <div
                  className="movie-description__play-trailer"
                  onClick={openMovie}
                >
                  <i className="fa fa-play" aria-hidden="true"></i>
                  <span>Play Trailer</span>
                </div>
                <div className="movie-description__tagline">
                  {movie.tagline}
                </div>
                <div className="movie-description__over-view">
                  <div className="movie-description__over-view__title">
                    Overview
                  </div>
                  <div className="movie-description__over-view__content">
                    {movie.overview}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      className="movie-detail-container"
      style={{
        backgroundImage:
          movie &&
          movie.backdrop_path &&
          `url(${BackdropImage}${movie.backdrop_path})`,
      }}
    >
      <div style={customStyle(colors)}>
        {movie && movie.backdrop_path && (
          <div className="movie-detail">
            <div className="movie-avatar">
              <img src={`${PosterAvatar}${movie.poster_path}`} alt="avatar" />
            </div>
            <div className="movie-description">
              <div className="movie-description__title">
                <span className="movie-description__title__main">
                  {movie.name}
                </span>
                <span className="movie-description__title__release-date">
                  ({getYear(movie.last_air_date)})
                </span>
              </div>

              <div className="movie-description__control">
                <div className="movie-description__control__rate">
                  {movie.vote_average}%
                </div>
                <div className="movie-description__control__rate--explain">
                  User Score
                </div>
              </div>
              <div
                className="movie-description__play-trailer"
                onClick={openMovie}
              >
                <i className="fa fa-play" aria-hidden="true"></i>
                <span>Play Trailer</span>
              </div>
              <div className="movie-description__tagline">{movie.tagline}</div>
              <div className="movie-description__over-view">
                <div className="movie-description__over-view__title">
                  Overview
                </div>
                <div className="movie-description__over-view__content">
                  {movie.overview}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
