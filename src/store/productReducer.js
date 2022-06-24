const defaultState = {
    products: [],
}

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { value: state.value + action.payload }
        case 'REMOVE_PRODUCT':
            return { value: state.value - action.payload }
        default:
            return state
    }
}