import API from '../API';

const PokemonActions = {
  getSinglePokemon() {
    console.log('Inside Pokemon Actions');
    API.getSinglePokemon();
  }
}

export default PokemonActions;
