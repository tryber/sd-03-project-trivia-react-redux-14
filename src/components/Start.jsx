import React, { Component } from 'react';

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      disabledButton: true,
    };
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
      disabledButton: false,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      disabledButton: false,
    });
  }

  render() {
    const { disabledButton } = this.state;
    return (
      <div>
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
        <button
          disabled={disabledButton}
          data-testid="btn-play"
        >Play
        </button>
      </div>
    );
  }
}

export default Start;
