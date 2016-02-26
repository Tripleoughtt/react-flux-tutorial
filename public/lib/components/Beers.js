import React, { Component } from 'react';
import BeerButton from './BeerButton';
import BeerActions from '../actions/BeerActions';

class Beers extends Component {
  constructor(props) {
    super(props);
  }

  getTheBeer() {
    BeerActions.getRandomBeer();
  }

  render() {
    return (
      <div>
        <BeerButton getTheBeer={this.getTheBeer.bind(this)} />
      </div>
    );
  }
}

export default Beers;
