import { combineReducers } from 'redux';

import defaultNumber from './default_number';

import calculation from './number_cal';

console.log(defaultNumber, "gotdemn");

const mainReducer = combineReducers({
   
  defaultNumber,
  calculation
    
}


);

console.log(mainReducer, "          what is reducer?");
console.log(mainReducer.defaultNumber + "     what is default number" );
console.log(mainReducer.calculation);
console.log(combineReducers({defaultNumber}), "what the hack this?");


export default mainReducer;