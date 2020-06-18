import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { UtilsProvider } from './store/Utils';
import { SearchProvider } from './store/Search';
import SearchPage from './pages/SearchPage';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <UtilsProvider>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <SearchProvider>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </SearchProvider>
        </UtilsProvider>

      </Switch>
    </Router>
  );
}

export default App;
