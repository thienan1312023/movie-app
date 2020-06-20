import React from "react";
import RecommendationItem from "../RecommendationItem";

function RecommendationList({ RecommendList }) {
  return (
    <React.Fragment>
      <div className="recommendation-list">
        {RecommendList &&
          RecommendList.length > 0 &&
          RecommendList.map((item, index) => (
            <RecommendationItem key={index} RecommendItem={item} />
          ))}
      </div>
    </React.Fragment>
  );
}

export default RecommendationList;