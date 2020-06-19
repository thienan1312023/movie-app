import React, { useEffect, useState } from "react";
import { ButtonGroup } from "reactstrap";
import { PopularContext } from "../../store/PopularList";
import {
  getPopularMovieList,
  getPopularTVList,
} from "../../services/PopularList.services";
import PopularList from "./PopularList";
import "./styles.scss";

function Popular() {
  console.log('popular context', React.useContext(PopularContext))
  const {
    movieList: { popularMovieList, setPopularMovieList },
    tvList: { popularTVList, setPopularTVList },
    typeOfVideo: { isMovie, setIsMovie },
  } = React.useContext(PopularContext);

  const [popularList, setPopularList] = useState([]);
  const [isActiveTV, setIsActiveTV] = useState(true);

  useEffect(() => {
    setIsMovie(false);
  }, []);

  useEffect(() => {
    if (!isMovie) {
      getPopularTVList()
        .then((response) => response.json())
        .then((data) => setPopularTVList(data));
    } else {
      getPopularMovieList()
        .then((response) => response.json())
        .then((data) => setPopularMovieList(data));
    }
  }, [isMovie, setPopularMovieList, setPopularTVList]);

  useEffect(() => {
    setPopularList(popularTVList);
  }, [popularTVList]);

  useEffect(() => {
    setPopularList(popularMovieList);
  }, [popularMovieList]);

  const onToggle = (type) => {
    if (type === "tv") {
      setIsActiveTV(true);
      console.log('toggle');
      setIsMovie(false);
    } else {
      setIsActiveTV(false);
      setIsMovie(true);
    }
  };

  return (
    <div className="popular-container">
      <div className="popular-container__control">
        <h2>What's Populars</h2>
        <ButtonGroup aria-label="Basic example">
          <div
            className={isActiveTV ? "select-active" : "select-disbled"}
            onClick={() => onToggle("tv")}
          >
            On TV
          </div>
          <div
            className={!isActiveTV ? "select-active" : "select-disbled"}
            onClick={() => onToggle("theaters")}
          >
            In Theaters
          </div>
        </ButtonGroup>
      </div>
      {popularList?.results && (
        <PopularList PopularList={popularList.results} />
      )}
    </div>
  );
}

export default Popular;
