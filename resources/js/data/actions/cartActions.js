import { FETCH_CART, ADD_TO_CART, QUANTITY_INCREASE, QUANTITY_DECREASE, ITEM_COUNT } from "./types"
import { addItemToCart, quantityIncrease, quantityDecrease } from "./cart"



export const fetchCart = () => dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    dispatch({
        type: FETCH_CART,
        payload: cart
    })
}

export const addToCart = (id, category) => async dispatch => {
    await addItemToCart(id, category)
    dispatch({
        type: ADD_TO_CART,
        payload: { id, category }
    })

    const cart = JSON.parse(localStorage.getItem('cart'))
    let count = 0;
    cart.map(item => {
        count++;
    })

    dispatch({
        type: ITEM_COUNT,
        payload: count
    })
}

export const increaseQuantity = (name) => async dispatch => {
    await quantityIncrease(name)
    const cart = JSON.parse(localStorage.getItem('cart'))
    dispatch({
        type: QUANTITY_INCREASE,
        payload: cart
    })
}

export const decreaseQuantity = (name) => async dispatch => {
    await quantityDecrease(name)
    const cart = JSON.parse(localStorage.getItem('cart'))
    dispatch({
        type: QUANTITY_DECREASE,
        payload: cart
    })
}

export const itemCount = () => dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    let count = 0;
    cart.map(item => {
        count++;
    })

    dispatch({
        type: ITEM_COUNT,
        payload: count
    })
}