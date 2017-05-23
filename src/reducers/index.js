import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';

const rootReducer = combineReducers({
 todo,
 counter
});

export default rootReducer;
