import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/movie/:id"
          children={<MovieDetail />}
        />
        <Route
          path="/"
          render={() => <Home />}
        />
      </Switch>
  </Router>
  );
}

export default App;
