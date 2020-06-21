import React, { Component } from 'react';
import { connect } from 'react-redux';
import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import rehabilitate from '../redux/actions/rehabilitateButtonAction';

class NextQuestionButton extends Component {
  render() {
    const { questionNumber, rehabilitateTimer } = this.props;
    return (
      <button
        data-testid="btn-next"
        onClick={() => {
          if (questionNumber >= 4) {
            const updatedScore = JSON.parse(localStorage.getItem('ranking'));
            const teste = JSON.parse(localStorage.getItem('state'));
            const newArray = [
              {
                name: teste.player.name,
                score: teste.player.score,
                picture: MD5(teste.player.gravatarEmail).toString(),
              },
            ];
            if (updatedScore !== null) updatedScore.map((el) => newArray.push(el));
            localStorage.setItem('ranking', JSON.stringify(newArray));
            return location.assign('/feedback');
          }
          return rehabilitateTimer(questionNumber);
        }}
      >
          Próxima
      </button>
    );
  }
}


const mapPropToState = (state) => ({
  questionNumber: state.questionsReducer.questionNumber,
});

const dispatchPropsToState = (dispatch) => ({
  rehabilitateTimer: (questionNumber) => dispatch(rehabilitate(questionNumber)),
});

NextQuestionButton.propTypes = {
  questionNumber: PropTypes.number,
  rehabilitateTimer: PropTypes.func,
};

NextQuestionButton.defaultProps = {
  questionNumber: '',
  rehabilitateTimer: '',
};

export default connect(mapPropToState, dispatchPropsToState)(NextQuestionButton);
