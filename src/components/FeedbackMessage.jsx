import React, { Component } from 'react';

export default class FeedbackMessage extends Component {
  render() {
    const oldScore = JSON.parse(localStorage.getItem('state'));
    return (
      <div data-testid="feedback-text">
        {oldScore.player.assertions < 3 && 'Podia ser melhor...'}
        {oldScore.player.assertions >= 3 && 'Mandou bem!'}
      </div>
    );
  }
}
