import React from "react";
import HeaderContainer from "../../containers/Header";
import MovieDetailContainer from "../../containers/MovieDetail";
import RecommendationsContainer from "../../containers/Recommendations";
function Home() {
  return (
    <React.Fragment>
      <HeaderContainer />
        <MovieDetailContainer />
        <RecommendationsContainer />
    </React.Fragment>
  );
}
export default Home;
