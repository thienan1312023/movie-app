import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function RecommendationItem({ RecommendItem }) {
  const { original_name, poster_path } = RecommendItem;
  return (
    <React.Fragment>
      <Card>
        <CardImg top width="100%" src={poster_path} alt="Card image cap" />
        <CardBody>
          <CardTitle>{original_name}</CardTitle>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}

export default RecommendationItem;
