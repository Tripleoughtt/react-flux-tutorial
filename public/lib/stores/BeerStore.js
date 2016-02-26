import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _beer;

class BeerStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register((action) => {
      switch(action.type) {
        case 'RECEIVE_RANDOM_BEER':
          _beer = action.beer;
          console.log('Inside App Dispatcher');
          this.emit('CHANGE');
          break;
      }
    });
  }

  getRandomBeer() {
    return _beer;
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }
}

export default new BeerStore();
