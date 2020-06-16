import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tokenApi from '../services/tokenApi';
import updateEmail from '../redux/actions/emailAction';
import updateName from '../redux/actions/nameAction';
import updateQuestions from '../redux/actions/questionsAction';
import ConfigButton from './ConfigButton';

const requestApi = ({ email, name, dispatchQuestions }) => {
  const initialState = {
    player: {
      name,
      assertions: 0,
      score: 0,
      gravatarEmail: email,
    },
  };
  const stringyState = JSON.stringify(initialState);
  localStorage.setItem('state', stringyState);

  tokenApi(dispatchQuestions)
};

const disabledButton = (email, name) => {
  if (name !== '' && email !== '') {
    return false;
  }
  return true;
};

const Start = (props) => {
  const { dispatchEmail, dispatchName, email, name, loged, questionsCategory } = props;
  if (loged && questionsCategory.length>0) return <Redirect to="/game" />;
  return (
    <div>
      <ConfigButton />
      <label htmlFor="name">Insert your name</label>
      <input
        id="name"
        data-testid="input-player-name"
        onChange={(e) => dispatchName(e.target.value)}
      />
      <label htmlFor="email">Insert your email</label>
      <input
        id="email"
        onChange={(e) => dispatchEmail(e.target.value)} data-testid="input-gravatar-email"
      />
      <button
        disabled={disabledButton(email, name)}
        data-testid="btn-play"
        onClick={() => requestApi(props)}
      >Jogar
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  questionsCategory: state.questionsReducer.questions.results,
  email: state.emailReducer.email,
  name: state.nameReducer.name,
  loged: state.questionsReducer.loged,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (e) => dispatch(updateEmail(e)),
  dispatchName: (e) => dispatch(updateName(e)),
  dispatchQuestions: (e) => dispatch(updateQuestions(e)),
});

Start.propTypes = {
  loged: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  dispatchEmail: PropTypes.func,
  dispatchName: PropTypes.func,
};

Start.defaultProps = {
  loged: '',
  email: '',
  name: '',
  dispatchEmail: '',
  dispatchName: '',
  dispatchQuestions: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
