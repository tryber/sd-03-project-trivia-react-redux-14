import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  updateInput,
  updateQuestions,
} from '../redux/actions/index';
import tokenAPI from '../services/requestToken';

const tokenState = (name, email, dispatchQuestions) => {
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
  // console.log(JSON.parse(localStorage.getItem('state')));
  tokenAPI()
};


const handleChange = (e, dispatchInput) => {
  const { name, value } = e.target;
  dispatchInput(value, name);
};

const disableButton = (name, email) => {
  if (name && email) {
    return false;
  }
  return true;
};

const InputLogin = ({ name, email, dispatchInput, dispatchQuestions }) => (
  <div>
    <label htmlFor="name">Email do Jogador:</label>
    <input
      value={email || ''}
      id="email"
      placeholder="Email do Gravatar:"
      onChange={(e) => handleChange(e, dispatchInput)}
      name="email"
      type="text"
      data-testid="input-gravatar-email"
    />
    <label htmlFor="name">Nome do Jogador:</label>
    <input
      value={name || ''}
      id="name"
      placeholder="Nome do Jogador:"
      onChange={(e) => handleChange(e, dispatchInput)}
      name="name"
      type="text"
      data-testid="input-player-name"
    />
    <Link to="/game">
      <button
        disabled={disableButton(name, email)}
        data-testid="btn-play"
        onClick={() => tokenState(name, email, dispatchQuestions)}
      >
      Jogar!
    </button>
    </Link>
  </div>
);

const mapStateToProps = ({
  dispatchInput,
  dispatchQuestions,
  inputReducer: { name, email },
}) => (
    { name, email, dispatchInput, dispatchQuestions }
);

const mapDispatchToProps = (dispatch) => ({
  dispatchInput: (value, name) => dispatch(updateInput(value, name)),
  dispatchQuestions: (e) => dispatch(updateQuestions(e)),
});

InputLogin.propTypes = {
  dispatchInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputLogin);


