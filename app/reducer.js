import { combineReducers } from 'redux';
import LoginReducer from './screens/login/login.reducer.js';
import TodoReducer from './screens/todo/todo.reducer.js';
const reducers = combineReducers({
  todo: TodoReducer,
  login: LoginReducer,
});
export default reducers;
