import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';

const rootReducer = combineReducers({
    counter: CounterReducer
    //other reducers go here
});

export default rootReducer;