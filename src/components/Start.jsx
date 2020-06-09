import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import tokenApi from '../services/tokenApi';
import questionsApi from '../services/questionsApi';
import ConfigButton from './ConfigButton';

const requestApi = () => {
  tokenApi()
    .then(console.log(localStorage.getItem('token')))
    .then(questionsApi);
};

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      disabledButton: true,
    };
  }

  switchButton() {
    const { name, email } = this.state;
    if (name.length > 0 && email.length > 0) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
    this.switchButton();
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
    this.switchButton();
  }

  render() {
    const { disabledButton } = this.state;
    return (
      <div>
        <ConfigButton />
        <label htmlFor="name">Insert your name</label>
        <input
          id="name"
          data-testid="input-player-name"
          onChange={(e) => this.handleChangeName(e)}
        />
        <label htmlFor="email">Insert your email</label>
        <input
          id="email"
          onChange={(e) => this.handleChangeEmail(e)} data-testid="input-gravatar-email"
        />
        <Link to="/game">
          <button
            disabled={disabledButton}
            data-testid="btn-play"
            onClick={requestApi}
          >Jogar
        </button>
        </Link>
      </div>
    );
  }
}

export default Start;
