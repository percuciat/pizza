import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";


const composeEnhancers = compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));