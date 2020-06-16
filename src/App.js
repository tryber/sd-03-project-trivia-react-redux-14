import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Settings from './pages/Settings';
import Home from './pages/Home';
import GamePage from './pages/GamePage';

import './App.css';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/settings"
          component={Settings}
        />
        <Route
          exact
          path="/game"
          component={GamePage}
        />
        <Route
          exact
          path="/feedback"
          component={Feedback}
        />
      </Switch>
    </BrowserRouter>
  );
}
