import { FETCH_CART, ADD_TO_CART } from '../actions/types'

const initialState = {
    cart: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CART:
            console.log(action.payload)
            return {
                ...state,
                cart: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}