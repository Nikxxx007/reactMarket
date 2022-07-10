import {createStore, combineReducers} from 'redux';
import {amountReducer} from './amountReducer';
import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers ({
    amount: amountReducer,
    products: productReducer,
    cart: cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())