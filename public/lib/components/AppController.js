import React from 'react';
import BeerButton from './BeerButton';

class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello World!
        <BeerButton />
      </div>
    );
  }
}

export default AppController;
