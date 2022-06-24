import {createStore, combineReducers} from 'redux';
import {amountReducer} from './amountReducer';
import {productReducer} from './productReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers ({
    amount: amountReducer,
    products: productReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())