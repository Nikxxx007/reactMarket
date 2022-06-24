import {createStore, combineReducers} from 'redux';
import {amountReducer} from './amountReducer';
import {productReducer} from './productReducer';

const rootReducer = combineReducers ({
    amount: amountReducer,
    products: productReducer,
})

export const store = createStore(rootReducer)