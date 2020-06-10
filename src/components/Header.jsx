import React, { Component } from 'react';
import MD5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    const { name, email } = this.props;
    const hash = MD5(email);
    const gravatarIMG = `https://www.gravatar.com/avatar/${hash.toString()
      .toLowerCase()}.jpg`;
    return (
      <div>
        <img
          data-testid="header-profile-picture"
          alt="Profile gravatar"
          src={gravatarIMG}
        />
        <p data-testid="header-player-name">Jogador :{name}</p>
        <p data-testid="header-score">Score :</p>
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
