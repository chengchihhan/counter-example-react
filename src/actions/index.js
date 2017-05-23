export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TODO = 'ADD_TODO';

export const onIncrement = () => ({
  type: INCREMENT
});

export const onDecrement = () => ({
  type: DECREMENT
});

export const addTodo = () => ({
  type: ADD_TODO
});
