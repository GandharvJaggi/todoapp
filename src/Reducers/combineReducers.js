import { combineReducers } from "redux";
import todoreducer from './todoReducer';

export default combineReducers({
    todo: todoreducer,
  });