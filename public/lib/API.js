import { get } from 'jquery';
import ServerActions from './actions/ServerActions';

const API = {
  getSinglePokemon() {
    console.log('Inside API getting pokemon');
    get('http://pokeapi.co/api/v1/pokemon/129/')
    .then(res => {
      console.log('Inside API received pokemon');
      ServerActions.receivePokemon(res);
    });
  },
  getRandomBeer() {
    console.log('api');
    get('/beers/random')
    .then(res => {
      console.log(res.data);
      ServerActions.receiveRandomBeer(res.data);
    });
  }
}

export default API;
