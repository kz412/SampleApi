import { combineReducers } from "redux";
import calculator from './calculator';
import authentication from './authentication';

export default combineReducers({ calculator, authentication });
