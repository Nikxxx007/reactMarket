export const cartReducer = (state = { value: false }, action) => {
    switch (action.type) {
        case 'OPEN':
            return {...state, value: true }
        case 'CLOSE':
            return {...state, value: false }
        default:
            return state
    }
}