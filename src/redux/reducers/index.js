import { combineReducers } from 'redux';

import filter from './filter'
import pizza from './pizza'


const rootReducer = combineReducers({
    filter222: filter,
    pizza,
});

export default rootReducer;