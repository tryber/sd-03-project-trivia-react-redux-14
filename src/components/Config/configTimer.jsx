import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { timerDown, wrongAnswer } from '../../redux/actions/index';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countTimerDown = this.countTimerDown.bind(this);
  }

  componentDidMount() {
    setInterval(this.countTimerDown, 1000);
  }

  countTimerDown() {
    const { dispatchTimerDown, timer, setClassAnswered, stopTimer } = this.props;
    if (!stopTimer && timer > 0) {
      dispatchTimerDown(timer);
    }
    if (timer === 1) {
      setClassAnswered();
    }
    return true;
  }

  render() {
    const { timer } = this.props;
    return <p className="CentralizeW"> <img src="https://img.icons8.com/color/48/000000/watch--v1.png" alt="pra cego ver" /> {timer}</p>;
  }
}

const mapPropToState = (state) => ({
  timer: state.gameReducer.timer,
  stopTimer: state.gameReducer.stopTimer,
});

const dispatchPropsToState = (dispatch) => ({
  dispatchTimerDown: (props) => dispatch(timerDown(props)),
  setClassAnswered: () => dispatch(wrongAnswer()),
});

Timer.propTypes = {
  timer: PropTypes.number,
  dispatchTimerDown: PropTypes.func,
  setClassAnswered: PropTypes.func,
};

Timer.defaultProps = {
  timer: '',
  dispatchTimerDown: '',
  setClassAnswered: '',
};

export default connect(mapPropToState, dispatchPropsToState)(Timer);

