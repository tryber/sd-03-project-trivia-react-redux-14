import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tokenApi from '../services/tokenApi';
import updateEmail from '../redux/actions/emailAction';
import updateName from '../redux/actions/nameAction';
import updateQuestions from '../redux/actions/questionsAction';
import ConfigButton from './ConfigButton';

const requestApi = (dispatchQuestions) => {
  tokenApi()
    .then(
      fetch(`https://opentdb.com/api.php?amount=5&token=${localStorage.getItem('token')}`)
        .then((response) => response.json())
        .then((data) => dispatchQuestions(data)),
    );
};

const disabledButton = (email, name) => {
  if (name !== '' && email !== '') {
    return false;
  }
  return true;
};

const Start = (props) => {
  const { dispatchEmail, dispatchName, email, name, dispatchQuestions } = props;
  state = { redirect: false }
  if (this.state.redirect) {
    return <Redirect to={'/game'} />
  }
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
      <Link to="/game">
        <button
          disabled={disabledButton(email, name)}
          data-testid="btn-play"
          onClick={() => requestApi(dispatchQuestions)}
        >Jogar
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  email: state.emailReducer.email,
  name: state.nameReducer.name,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (e) => dispatch(updateEmail(e)),
  dispatchName: (e) => dispatch(updateName(e)),
  dispatchQuestions: (e) => dispatch(updateQuestions(e)),
});

Start.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  dispatchEmail: PropTypes.func,
  dispatchName: PropTypes.func,
  dispatchQuestions: PropTypes.func,
};

Start.defaultProps = {
  email: '',
  name: '',
  dispatchEmail: '',
  dispatchName: '',
  dispatchQuestions: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
