import React, { Component } from 'react';
import MD5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    const oldScore = JSON.parse(localStorage.getItem('state'));
    const hash = MD5(oldScore.player.gravatarEmail);
    const gravatarIMG = `https://www.gravatar.com/avatar/${hash.toString()
      .toLowerCase()}.jpg`;
    return (
      <div>
        <p data-testid="header-score">{oldScore.player.score}</p>
        <p data-testid="header-player-name">{oldScore.player.name}</p>
        <img
          data-testid="header-profile-picture"
          alt="Profile gravatar"
          src={gravatarIMG}
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
