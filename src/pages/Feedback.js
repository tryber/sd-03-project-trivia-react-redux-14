import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import FeedbackMessage from '../components/FeedbackMessage';
import FinalResultFeedback from '../components/FinalResultFeedback';

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeedbackMessage />
        <FinalResultFeedback />
        <Link to="/">
          <button data-testid="btn-play-again">
            Jogar novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking">
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }
}
