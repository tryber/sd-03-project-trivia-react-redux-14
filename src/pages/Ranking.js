import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Ranking extends Component {
  render() {
    return (
      <div>
        <p data-testid="ranking-title">Raking</p>
        <Link to="/" data-testid="btn-go-home">
          <button>
            Página inicial
          </button>
        </Link>
      </div>
    );
  }
}
