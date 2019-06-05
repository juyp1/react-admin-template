
import { combineReducers } from 'redux-immutable';
import {reducer as UserReducer } from '../components/system/store';
 
const reducer = combineReducers({
  user: UserReducer,
})
export default reducer