import React from "react";
import RecommendationItem from "../RecommendationItem";
import "./styles.scss";
function RecommendationList({ RecommendList }) {
  return (
    <React.Fragment>
      <div className="recommendation-list-container">
        <div>
          {RecommendList &&
            RecommendList.length > 0 &&
            RecommendList.map((item, index) => (
              <RecommendationItem key={index} RecommendItem={item} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default RecommendationList;
