import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Ranking extends Component {
  render() {
    const socoreRanking = JSON.parse(localStorage.getItem('ranking'));
    function compare(a, b) {
      const bandA = a.score;
      const bandB = b.score;
      const comparison = 0;
      if (bandA < bandB) {
        return comparison === 1;
      }
      if (bandA > bandB) {
        return comparison === -1;
      }
      return comparison;
    }
    const sort = socoreRanking.sort(compare);
    return (
      <div>
        <p data-testid="ranking-title">Raking</p>
        {socoreRanking !== null && sort.map((el, index) =>
          <p>
            <h3 data-testid={`player-name-${index}`}>{el.name}</h3>
            <h3 data-testid={`player-score-${index}`}>{el.score}</h3>
            <img
              data-testid="header-profile-picture"
              alt="Profile gravatar"
              src={`https://www.gravatar.com/avatar/${el.picture.toLowerCase()}.jpg`}
            />
          </p>)}
        <Link to="/" data-testid="btn-go-home"><button>Página inicial</button></Link>
      </div>
    );
  }
}
