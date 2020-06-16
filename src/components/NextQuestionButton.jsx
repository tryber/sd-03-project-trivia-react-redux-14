import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import rehabilitate from '../redux/actions/rehabilitateButtonAction';

class NextQuestionButton extends Component {
  render() {
    const { questionNumber, rehabilitateTimer } = this.props;
    return (
      <button
        data-testid="btn-next"
        onClick={() =>  rehabilitateTimer(questionNumber)}
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
