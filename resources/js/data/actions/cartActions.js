import { FETCH_CART, ADD_TO_CART } from "./types"
import Axios from "axios"



export const fetchCart = () => dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    dispatch({
        type: FETCH_CART,
        payload: cart
    })
}

export const addToCart = (id) => dispatch => {

    // setCart(JSON.parse(localStorage.getItem('cart')))
    // cartOld.map(it => {
    //     if (it.id === id) {
    //         it.quantity = it.quantity + 1
    //         setAlreadyIn(true)
    //     }
    //     return it
    // })

    // if (alreadyIn === false) {
    Axios.get('/api/products/' + id)
        .then(res => {

            const cartOld = JSON.parse(localStorage.getItem('cart'))

            const item = res.data.item

            const cart = [...cartOld, item]

            localStorage.setItem('cart', JSON.stringify(cart))

        })
    // }


    const newCart = JSON.parse(localStorage.getItem('cart'))
    dispatch({
        type: ADD_TO_CART,
        payload: newCart

    })
}

export function quantityChange(id, operator) {

}