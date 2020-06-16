import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


class Feedback extends Component {
  renderFeedBack() {
    const { assertions, score } = this.props;
    return (
      <div>
        <Header />
        <div className="Game">
          <div className="GameContainer">
            <p data-tesid="feedback-text">Podia ser melhor.. 🙄</p>
            <p data-testid="feedback-total-score">Total de Pontos: {score}</p>
            <p data-testid="feedback-total-question">Total de Questões: {assertions} 🤦‍♂️ </p>
          </div>
        </div>
        <div className="Centralize">
          <Link to="/">
            <button data-testid="btn-play-again">Jogar Novamente</button>
          </Link>
          <Link to={'/ranking'}>
            <button data-testid="btn-ranking">Ver Ranking</button>
          </Link>
        </div>
      </div>
    );
  }
  render() {
    const { assertions, score } = this.props;
    if (assertions < 3) {
      return this.renderFeedBack();
    }
    return (
      <div>
        <Header />
        <div className="Game">
          <div className="GameContainer">
            <p data-tesid="feedback-text">Mandou bem! 🤓</p>
            <p data-testid="feedback-total-score">Total de Pontos: {score}</p>
            <p data-testid="feedback-total-question">
              Total de Questões: {assertions} corretas. 👨‍💻</p>
          </div>
        </div>
        <div className="Centralize">
          <Link to="/">
            <button data-testid="btn-play-again">Jogar Novamente</button>
          </Link>
          <Link to={'/ranking'}>
            <button data-testid="btn-ranking">Ver Ranking</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  gameReducer: { assertions, score },
}) => ({
  assertions,
  score,
});

export default connect(mapStateToProps, null)(Feedback);
