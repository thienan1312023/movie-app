import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CreditListArea from "./CreditList";
import { getMovieCredits, getTVCredits } from "../../services/Credit.service";
import "./styles.scss";

function Credit() {
  const location = useLocation();
  const hrefPaths = location && location.pathname.split("/");
  const isMovie = !!(hrefPaths[1] === "movie");
  const { id } = useParams();
  const pureIds = id && id.split("-");
  const [CreditList, setCreditList] = useState([]);

  useEffect(() => {
    hrefPaths?.length > 0 && isMovie
      ? getMovieCredits(pureIds[0])
          .then((response) => response.json())
          .then((data) => setCreditList(data))
      : getTVCredits(pureIds[0])
          .then((response) => response.json())
          .then((data) => setCreditList(data));
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid credits">
        <div className="credits-container">
          <div className="credits-container__title">Characters</div>
          {CreditList?.cast && (
            <CreditListArea CreditList={CreditList.cast} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Credit;
