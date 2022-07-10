import menu from '../components/MenuData';

const defaultState = {
    products: new Array(menu.length).fill(0),
}

export const productReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case 'ADD_PRODUCT':
            return Object.assign({}, state, {
                product: state.products[payload.id - 1] += parseInt(payload.value)
            })
        case 'REMOVE_PRODUCT':
            return Object.assign({}, state, {
                product: state.products[payload.id - 1] = 0
            })
        default:
            return state
    }
}