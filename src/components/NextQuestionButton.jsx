import React from 'react'
import { connect } from 'react-redux'
import rehabilitate from '../redux/actions/rehabilitateButtonAction';
import PropTypes from 'prop-types';

const NextQuestionButton = ({ rehabilitateTimer, questionNumber }) => {
  return (
    <button data-testid="btn-next" onClick={() => {
      if(questionNumber>=4) return location.assign("/feedback")
      rehabilitateTimer(questionNumber)}}>Próxima</button>
  )
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
