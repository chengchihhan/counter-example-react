export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const ADD_TODO = 'ADD_TODO';

export const increment = () => ({
  type: 'INCREMENT_COUNTER'
});

export const decrement = () => ({
  type: 'DECREMENT_COUNTER'
});

export const addTodo = () => ({
  type: 'ADD_TODO'
});
