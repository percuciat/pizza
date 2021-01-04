import { combineReducers } from 'redux';

import filter from './filter'
import pizza from './pizza'
import cart from './cart'


const rootReducer = combineReducers({
    filter222: filter,
    pizza,
    cart,
});

export default rootReducer;