import { get } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
  getRandomBeerReq() {
      get('http://pokeapi.co/api/v2/pokemon/233')
      .then(res => {
        ServerActions.receiveRandomBeer(res);
      });
  }
}

export default API;
