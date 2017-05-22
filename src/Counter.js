import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render() {
    const {onIncrement, onDecrement, value} = this.props;
    return(
      <div>
        <p>
          Clicked: <span id="value">{value}</span> times
          <button onClick={onIncrement}>+</button>
          {' '}
          <button onClick={onDecrement}>-</button>
        </p>
      </div>
    );
  }
};
