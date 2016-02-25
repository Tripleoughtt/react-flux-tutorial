import React, { Component } from 'react';
import beerActions from '../actions/beerActions';

class BeerButton extends Component {
  constructor(props) {
    super(props);
  }

  beerClick() {
    beerActions.getRandomBeer();
  }

  render() {
    return (
      <button onClick={ this.beerClick }>Click</button>
    );
  }
}

export default BeerButton;
