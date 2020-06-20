import React from "react";
import HeaderContainer from "../../containers/Header";
import MovieDetailContainer from "../../containers/MovieDetail";
import RecommendationsContainer from "../../containers/Recommendations";
import CreditContainer from '../../containers/Credits';
function Home() {
  return (
    <React.Fragment>
      <HeaderContainer />
        <MovieDetailContainer />
        <CreditContainer/>
        <RecommendationsContainer />
    </React.Fragment>
  );
}
export default Home;
