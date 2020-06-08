import React, { Component } from 'react';

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      disabledButton: true
    };
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
      disabledButton: false,
    })
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      disabledButton: false,
    })
  }

  render() {
    const {name, email, disabledButton} = this.state;
    return (
      <div>
        <label>Insert your name</label>
        <input
        data-testid="input-player-name"
        onChange={(e) => this.handleChangeName(e)}
        />
        <label>Insert your email</label>
        <input onChange={(e) => this.handleChangeEmail(e)} data-testid="input-gravatar-email" />
        <button disabled={disabledButton} data-testid="btn-play">Play</button>
      </div>
    );
  }
}

export default Start;
