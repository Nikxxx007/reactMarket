export const amountReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, value: state.value + action.payload }
        case 'DECREMENT':
            return {...state, value: state.value - action.payload }
        default:
            return state
    }
}