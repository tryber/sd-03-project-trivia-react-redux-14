import React, { Component } from 'react';
import { Header } from '../components/Header';
import FeedbackMessage from '../components/FeedbackMessage';
import { Link } from 'react-router-dom';

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeedbackMessage />
        <Link to="/">
          <button data-testid="btn-play-again">
            Jogar novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking">
            "Ver Ranking"
          </button>
        </Link>
      </div>
    );
  }
}
