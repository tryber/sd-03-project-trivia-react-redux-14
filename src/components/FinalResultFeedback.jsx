import React, { Component } from 'react';

export default class FinalResultFeedback extends Component {
  render() {
    const oldScore = JSON.parse(localStorage.getItem('state'));
    return (
      <div>
        <p data-testid="feedback-total-score">{oldScore.player.score}</p>
        <p data-testid="feedback-total-question">{oldScore.player.assertions}</p>
      </div>
    );
  }
}
