import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receivePokemon(pokemon) {
    console.log('Inside Server Actions');
    AppDispatcher.dispatch({
      type: 'RECEIVE_SINGLE_POKEMON',
      pokemon: pokemon
    });
  }
}

export default ServerActions;
