import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import rehabilitate from '../redux/actions/rehabilitateButtonAction';
import cownDown from '../redux/actions/cowntDownAction';
import updateAswer from '../redux/actions/answerAction';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    setInterval(this.countDown, 1000);
  }

  countDown() {
    const {
      rehabilitateTimer, countDowmdispatch, timer, questionNumber, updateQuestions,
    } = this.props;
    if (timer > 0) {
      countDowmdispatch(timer);
    }
    if (timer === 0) {
      updateQuestions();
      return new Promise(() => {
        setTimeout(() => {
          rehabilitateTimer(questionNumber);
        }, 1000);
      });
    }
    return true;
  }

  render() {
    const { timer } = this.props;
    return (
      <div>
        <p>{timer}</p>
      </div>
    );
  }
}

const mapPropToState = (state) => ({
  timer: state.questionsReducer.timer,
  questionNumber: state.questionsReducer.questionNumber,
});

const dispatchPropsToState = (dispatch) => ({
  rehabilitateTimer: (questionNumber) => dispatch(rehabilitate(questionNumber)),
  countDowmdispatch: (props) => dispatch(cownDown(props)),
  updateQuestions: () => dispatch(updateAswer()),
});

Timer.propTypes = {
  timer: PropTypes.number,
  questionNumber: PropTypes.number,
  rehabilitateTimer: PropTypes.func,
  countDowmdispatch: PropTypes.func,
  updateQuestions: PropTypes.func,
};

Timer.defaultProps = {
  timer: '',
  questionNumber: '',
  rehabilitateTimer: '',
  countDowmdispatch: '',
  updateQuestions: '',
};

export default connect(mapPropToState, dispatchPropsToState)(Timer);

