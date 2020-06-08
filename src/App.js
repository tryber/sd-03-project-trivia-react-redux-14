import React from 'react';
import logo from './trivia.png';
import './App.css';
import Start from './components/Start';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Start />
      </header>
    </div>
  );
}
