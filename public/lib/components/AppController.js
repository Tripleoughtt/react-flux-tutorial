import React from 'react';
import PokemonStore from '../stores/PokemonStore';
import PokemonActions from '../actions/PokemonActions';
import Beers from './Beers';

let _getAppState = () => {
  console.log('render component');
  return {
    pokemon: PokemonStore.getSinglePokemon()
  }
}

class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PokemonStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PokemonStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState(_getAppState());
  }

  getSinglePokemon() {
    PokemonActions.getSinglePokemon();
  }

  render() {
    let pokemon = this.state.pokemon ? this.state.pokemon.name : 'Waiting To Receive Pokemon';
    return (
      <div>
        <Beers />
      </div>
    );
  }
}

export default AppController;
