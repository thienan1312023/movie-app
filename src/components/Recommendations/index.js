import React from "react";
import {useLocation} from 'react-router-dom';
import { Media } from "reactstrap";
import RecommendationList from './RecommendationList'
function Recommendations() {
  return <React.Fragment>
      <RecommendationList />
  </React.Fragment>;
}
