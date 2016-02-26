import React, { Component } from 'react';
import BeerButton from './BeerButton';
import BeerActions from '../actions/BeerActions';
import BeerStore from '../stores/BeerStore';
import BeerCard from './BeerCard';

let _getAppState = () => {
  return {
     beers: BeerStore.getRandomBeer()
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
    let beers =
    this.state.beers.map((beer, i) => BeerCard(beer));
    return (
      <div>
        { beers }
        <BeerButton getTheBeer={this.getTheBeer.bind(this)} />
      </div>
    );
  }
}

export default Beers;
