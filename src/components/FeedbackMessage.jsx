import React, { Component } from 'react';

export default class FeedbackMessage extends Component {
  render() {
    const feedbackMessage = JSON.parse(localStorage.getItem('state'));
    return (
      <div data-testid="feedback-text">
        {feedbackMessage.player.assertions < 3 && 'Podia ser melhor...'}
        {feedbackMessage.player.assertions >= 3 && 'Mandou bem!'}
      </div>
    );
  }
}
