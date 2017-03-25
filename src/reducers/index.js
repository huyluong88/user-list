import { combineReducers } from 'redux';
import userReducer from './reducers-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
  users: userReducer,
  ActiveUser: ActiveUserReducer
})

export default allReducers;
