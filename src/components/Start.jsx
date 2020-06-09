import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tokenApi from '../services/tokenApi';
import updateEmail from '../redux/actions/emailAction';
import updateName from '../redux/actions/nameAction';
import questionsApi from '../services/questionsApi';
import ConfigButton from './ConfigButton';

const requestApi = () => {
  tokenApi()
    .then(console.log(localStorage.getItem('token')))
    .then(questionsApi);
};

const disabledButton = (email, name) => {
  if (name !== '' && email !== '') {
    return false;
  }
  return true;
};

const Start = (props) => {
  const { dispatchEmail, dispatchName, email, name } = props;
  console.log(props);
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
          onClick={requestApi}
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
});

Start.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  dispatchEmail: PropTypes.func,
  dispatchName: PropTypes.func,
};

Start.defaultProps = {
  email: '',
  name: '',
  dispatchEmail: '',
  dispatchName: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Start);
