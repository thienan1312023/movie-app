import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import RecommendationList from "./RecommendationList";
import {
  getTVRecommendations,
  getMovieRecommendations,
} from "../../services/Recommendations.service";
import "./styles.scss";
function Recommendations() {
  const location = useLocation();
  const hrefPaths = location && location.pathname.split('/');
  const isMovie = !!(hrefPaths[1] === "movie")
  console.log('is movie', isMovie)
  const { id } = useParams();
  const pureIds = id && id.split("-");
  const [RecommendList, setRecommendList] = useState([]);
  useEffect(() => {
    hrefPaths?.length > 0 && isMovie
      ? getMovieRecommendations(pureIds[0])
          .then((response) => response.json())
          .then((data) => setRecommendList(data))
      : getTVRecommendations(pureIds[0])
          .then((response) => response.json())
          .then((data) => setRecommendList(data));
  }, []);
  
  return (
    <React.Fragment>
      <div className="container-fluid credits">
        <div className="recommendations-container">
          <div className="recommendations-container__title">
            Recommendations
          </div>
          {RecommendList?.results && <RecommendationList RecommendList={RecommendList.results}/>}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Recommendations;
