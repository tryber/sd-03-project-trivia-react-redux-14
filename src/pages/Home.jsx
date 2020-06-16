import React from 'react';
import logo from '../trivia.png';
import '../App.css';
import InputLogin from '../components/InputLogin';
import ConfigButton from '../components/Config/configButton';

const Home = () => (
  <div className="App">
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <ConfigButton /> 
      <InputLogin />
    </div>
  </div>
);

export default Home;

