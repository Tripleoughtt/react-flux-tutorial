import API from '../API';

let beerActions = {
  getRandomBeer() {
    API.getRandomBeerReq();
  }
}

export default beerActions;
