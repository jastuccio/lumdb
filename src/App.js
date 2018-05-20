/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Route exact path="/" component={MoviesList} />
      <Route path="/:id" component={Test} />
    </div>
  </Router>
);

export default App;

const Test = ({ match }) => (
  <h1>{match.params.id}</h1>
);
