import { FETCH_CART, ADD_TO_CART, QUANTITY_INCREASE, QUANTITY_DECREASE, REMOVE_FROM_CART, ITEM_COUNT, CHECKOUT } from "./types"
import { addItemToCart, quantityIncrease, quantityDecrease, removeItemFromCart } from "./cart"



export const fetchCart = () => dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    dispatch({
        type: FETCH_CART,
        payload: cart
    })
}

export const addToCart = (id, category) => async dispatch => {
    await addItemToCart(id, category)
    const cart = JSON.parse(localStorage.getItem('cart'))

    dispatch({
        type: ADD_TO_CART,
        payload: cart
    })

    let count = 0;
    cart.map(item => {
        count++;
    })

    dispatch({
        type: ITEM_COUNT,
        payload: count
    })
}

export const removeFromCart = (name) => async dispatch => {
    await removeItemFromCart(name)
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: cart
    })


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
    if (cart) {
        cart.map(item => {
            count++;
        })
    }

    dispatch({
        type: ITEM_COUNT,
        payload: count
    })
}

export const checkout = () => dispatch => {
    const olderCart = localStorage.getItem('cart')
    console.log(olderCart);
    const cart = []
    localStorage.setItem('cart', JSON.stringify(cart))

    dispatch({
        type: CHECKOUT,
        payload: cart
    })
}