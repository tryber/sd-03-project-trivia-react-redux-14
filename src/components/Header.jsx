import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Header extends Component {
  render() {
    const { name, email } = this.props;
    const hash = CryptoJS.MD5(email);
    return (
      <div>
        <p data-testid="header-score">0</p>
        <p data-testid="header-player-name">{name}</p>
        <img
          data-testid="header-profile-picture"
          alt="Profile gravatar"
          src={`https://www.gravatar.com/avatar/${hash}`}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.nameReducer.name,
  email: state.emailReducer.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


export default connect(mapStateToProps, null)(Header);
