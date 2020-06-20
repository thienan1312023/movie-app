import React from "react";
import { useLocation } from "react-router-dom";
import { Link, useHistory  } from "react-router-dom";
import { replaceAll } from "../../../utils/customString";
import "./styles.scss";

const ORG_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";

function RecommendationItem({ RecommendItem }) {
  const location = useLocation();
  const hrefPaths = location && location.pathname.split("/");
  const isMovie = !!(hrefPaths[1] === "movie");

  if (isMovie) {
    const { poster_path, title, release_date, overview, id } = RecommendItem;
    return (
      <div className="recommend-item">
          <div className="recommend-item__main">
            <div className="recommend-item__image">
              <img src={ORG_URL + poster_path} alt="poster" />
            </div>
          </div>
          <div className="recommend-item__content">
            <div className="recommend-item__content__title">{title}</div>
            <div className="recommend-item__content__release">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span className="recommend-item__content__release__date">
                {release_date}
              </span>
              <i class="fa fa-heartbeat" aria-hidden="true"></i>
              <i class="fa fa-bookmark" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              {id}
            </div>
            <div className="recommend-item__overview">
              <span>{overview}</span>
            </div>
          </div>
      </div>
    );
  } else {
    const { poster_path, name, first_air_date, overview, id } = RecommendItem;
    return (
      <div className="recommend-item">
          <div className="recommend-item__main">
            <div className="recommend-item__image">
              <img src={ORG_URL + poster_path} alt="poster" />
            </div>
          </div>
          <div className="recommend-item__content">
            <div className="recommend-item__content__title">{name}</div>
            <div className="recommend-item__content__release">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              <span className="recommend-item__content__release__date">
                {first_air_date}
              </span>
              <i class="fa fa-heartbeat" aria-hidden="true"></i>
              <i class="fa fa-bookmark" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              {id}
            </div>
            <div className="recommend-item__content__overview">
              <span>{overview}</span>
            </div>
          </div>
      </div>
    );
  }
}

export default RecommendationItem;
