import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UtilsProvider } from "./store/Utils";
import { SearchProvider } from "./store/Search";
import { PopularProvider } from "./store/PopularList";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <UtilsProvider>
          <SearchProvider>
            <Route path="/search">
              <SearchPage />
            </Route>
            <PopularProvider>
              <Route path="/movie/:id">
                <MovieDetail />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </PopularProvider>
          </SearchProvider>
        </UtilsProvider>
      </Switch>
    </Router>
  );
}

export default App;
