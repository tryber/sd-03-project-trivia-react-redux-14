import React from 'react';
import Header from '../components/Header';
import Questions from '../components/Questions';
import '../styles/questions.css';


function GamePage() {
  return (
    <div>
      <h1 className='Game'>Game Page</h1>
      <Header />
      <div className='Game'>
        <Questions />
      </div>
    </div>
  );
}

export default GamePage;
