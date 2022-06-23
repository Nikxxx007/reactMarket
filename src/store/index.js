import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers ({
    amount: amountReducer,
    products: productReducer
})

export const store = createStore(rootReducer)