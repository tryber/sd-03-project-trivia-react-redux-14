import React, { Component } from 'react';
import MD5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfigButton from './Config/configButton';

export class Header extends Component {
  render() {
    const { name, email } = this.props;
    const hash = MD5(email);
    const gravatarIMG = `https://www.gravatar.com/avatar/${hash.toString()
      .toLowerCase()}.jpg`;
    return (
      <div className="GameHeader">
        <div className="PlayerHeader">
          <img
            data-testid="header-profile-picture"
            alt="Profile gravatar"
            src={gravatarIMG}
          />
          <p data-testid="header-player-name">{name}</p>
          <p data-testid="header-score">0</p>
        </div>
        <div>
          <ConfigButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ inputReducer: { name, email } }) => ({ name, email });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
