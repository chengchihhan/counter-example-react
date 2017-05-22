import { ADD_TODO } from '../actions/index'

export default (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.text])
    default:
      return state
  }
};
