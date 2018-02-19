import {combineReducers} from 'redux';
import CounterController from './inc-dec-reducer';


const commonReducer = combineReducers({
    cc: CounterController
});

export default commonReducer;

//getting value inside state reducer and then value