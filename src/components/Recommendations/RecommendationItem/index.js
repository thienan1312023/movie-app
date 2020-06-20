import React from "react";
import { useLocation } from "react-router-dom";
import "./styles.scss";

const ORG_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";

function RecommendationItem({ RecommendItem }) {
  const location = useLocation();
  const hrefPaths = location && location.pathname.split("/");
  const isMovie = !!(hrefPaths[1] === "movie");

  if (isMovie) {
    const { poster_path, title, release_date, overview } = RecommendItem;
    return (
      <div className="recommend-item">
        <div className="recommend-item__main">
          <div className="recommend-item__image">
            <img src={ORG_URL + poster_path} alt="poster" />
          </div>
        </div>
        <div className="recommend-item__content">
          <div className="recommend-item__content__title">{title}</div>
          <div className="recommend-item__content__release">{release_date}</div>
          <div className="recommend-item__over">
            <span>{overview}</span>
          </div>
        </div>
      </div>
    );
  } else {
    const { poster_path, name, first_air_date } = RecommendItem;
    return (
      <div className="recommend-item">
        <div className="recommend-item__image">
          <img src={ORG_URL + poster_path} alt="poster" />
        </div>
        <div className="recommend-item__content">
          <div className="recommend-item__content__title">{name}</div>
          <div className="recommend-item__content__release">
            {first_air_date}
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendationItem;
