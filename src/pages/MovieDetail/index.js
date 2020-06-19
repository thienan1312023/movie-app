import React from "react";
import HeaderContainer from "../../containers/Header";
import MovieDetail from "../../containers/MovieDetail";
import { PopularProvider } from "../../store/PopularList";
function Home() {
  return (
    <React.Fragment>
      <HeaderContainer />
      <PopularProvider>
        <MovieDetail />
      </PopularProvider>
    </React.Fragment>
  );
}
export default Home;
