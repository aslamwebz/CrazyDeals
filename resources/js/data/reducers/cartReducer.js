import { FETCH_CART, ADD_TO_CART, QUANTITY_DECREASE, QUANTITY_INCREASE, ITEM_COUNT, REMOVE_FROM_CART } from '../actions/types'

const initialState = {
    cart: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CART:
            return {
                ...state,
                cart: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: action.payload
            }
        case QUANTITY_DECREASE:
            return {
                ...state,
                cart: action.payload
            }
        case QUANTITY_INCREASE:
            return {
                ...state,
                cart: action.payload
            }
        case ITEM_COUNT:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}