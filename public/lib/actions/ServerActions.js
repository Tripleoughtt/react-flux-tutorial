import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receivePokemon(pokemon) {
    console.log('Inside Server Actions');
    AppDispatcher.dispatch({
      type: 'RECEIVE_SINGLE_POKEMON',
      pokemon
    });
  },
  receiveRandomBeer(beer) {
    console.log('Inside ServerActions');
    AppDispatcher.dispatch({
      type: 'RECEIVE_RANDOM_BEER',
      beer
    });
  }
}

export default ServerActions;
