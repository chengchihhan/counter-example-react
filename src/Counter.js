import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({onIncrement, onDecrement, value}) => (
  <div>
    <p>
      Clicked: <span id="value">{value}</span> times
      <button onClick={onIncrement}>+</button>
      {' '}
      <button onClick={onDecrement}>-</button>
    </p>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;
