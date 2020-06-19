import React from "react";
import HeaderContainer from "../../containers/Header";
import MovieDetail from "../../containers/MovieDetail";
function Home() {
  return (
    <React.Fragment>
      <HeaderContainer />
        <MovieDetail />
    </React.Fragment>
  );
}
export default Home;
