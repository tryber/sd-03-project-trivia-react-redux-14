import React, { Component } from 'react';
import MD5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/questions.css';


export class Header extends Component {
  render() {
    const playerInfos = JSON.parse(localStorage.getItem('state'));
    const hash = MD5(playerInfos.player.gravatarEmail);
    const gravatarIMG = `https://www.gravatar.com/avatar/${hash.toString()
      .toLowerCase()}.jpg`;
    return (
      <div className="GameHeader">
        <p data-testid="header-score">{playerInfos.player.score}</p>
        <p data-testid="header-player-name">{playerInfos.player.name}</p>
        <img
          className='Avatar'
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
