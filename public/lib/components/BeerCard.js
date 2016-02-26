import React from 'react';

const BeerCard = ({ name, abv, description, id }) => (
  <div key={ id }>
    <h3>{ name }</h3>
    <h3>{ abv }</h3>
    <p>{ description }</p>
  </div>
);

export default BeerCard;
