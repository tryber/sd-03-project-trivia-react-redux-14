import React, { Component } from 'react';
import '../App.css';

import logo from '../trivia.png';


import Start from '../components/Start';


class Home extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Start />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Home;
