import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _pokemon;

class PokemonStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register((action) => {
      switch(action.type) {
        case 'RECEIVE_SINGLE_POKEMON': 
          _pokemon = action.pokemon;
          console.log('Inside App Dispatcher');
          this.emit('CHANGE');
          break;
      }
    });
  }

  getSinglePokemon() {
    return _pokemon;
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }
}

export default new PokemonStore();

