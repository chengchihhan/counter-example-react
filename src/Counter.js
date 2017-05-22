import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {

  }

  render() {
    return(
      <div>
        <p>
          Clicked: <span id="value">0</span> times
          <button id="increment">+</button>
          <button id="decrement">-</button>
        </p>
      </div>
    );
  }
};
