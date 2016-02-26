import React, { Component } from 'react';
import BeerButton from './BeerButton';
import BeerActions from '../actions/BeerActions';
import BeerStore from '../stores/BeerStore';

let _getAppState = () => {
  return {
     beer: BeerStore.getRandomBeer()
  };
}

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    BeerStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    BeerStore.stopListening(this._onChange);
  }

  getTheBeer() {
    BeerActions.getRandomBeer();
  }

  _onChange() {
    this.setState(_getAppState());
  }

  render() {
    let beer = this.state.beer ? this.state.beer.name : 'No Beer';
    return (
      <div>
        <h1>{ beer }</h1>
        <BeerButton getTheBeer={this.getTheBeer.bind(this)} />
      </div>
    );
  }
}

export default Beers;
