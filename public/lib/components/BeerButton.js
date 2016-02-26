import React, { Component } from 'react';

class BeerButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.getTheBeer}>
        Get The Beer Even Though Its Banned
        </button>
      </div>
    );
  }
}

export default BeerButton;
