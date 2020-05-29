import React, { useEffect, useState } from 'react'
import Axios from 'axios'



const cart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        createCart()
        fetchCart()
    }, [])

    const createCart = () => {
        if (!localStorage.getItem('cart')) {
            setCart([])
            localStorage.setItem('cart', JSON.stringify(cart))
        }

    }

    const fetchCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        setCart(cart)
    }

    const addToCart = async (id) => {
        let product = await Axios.get('/api/products/' + id)
            .then(res => {
                return res.data.item
            }
            )

        const productExist = cart.find(item => item.id === id)
        if (productExist && productExist.id === product.id) {
            increaseQuantity(id)
        } else {
            let newCart = [...cart, product]
            localStorage.setItem('cart', JSON.stringify(newCart))
            let lcart = JSON.parse(localStorage.getItem('cart'))
            setCart(lcart)
        }
    }

    const clearCart = () => {
        let newCart = []
        localStorage.setItem('cart', JSON.stringify(newCart))
        let lcart = JSON.parse(localStorage.getItem('cart'))
        setCart(lcart)
    }

    const increaseQuantity = async (id) => {
        const newCart = await cart.map(item => {
            if (item.id === id) {
                item.quantity++
                return item
            } else {
                return item
            }
        })

        localStorage.setItem('cart', JSON.stringify(newCart))
        let lcart = JSON.parse(localStorage.getItem('cart'))
        setCart(lcart)
    }

    const decreaseQuantity = async (id) => {
        const newCart = await cart.map(item => {
            if (item.id === id) {
                item.quantity--
                return item
            } else {
                return item
            }
        })

        localStorage.setItem('cart', JSON.stringify(newCart))
        let lcart = JSON.parse(localStorage.getItem('cart'))
        setCart(lcart)
    }

    const removeFromCart = async (id) => {
        const newCart = await cart.filter(it => {
            return it.id !== id
        })

        localStorage.setItem('cart', JSON.stringify(newCart))
        let lcart = JSON.parse(localStorage.getItem('cart'))
        setCart(lcart)
    }


    return (
        <div className="container mt-4">
            <ul>
                {cart.map(item => {
                    return <li key={item.id}>{item.name} - {item.quantity} </li>
                })}
                <br />
                <br />
                <br />
                <button onClick={() => clearCart()}>Clear Cart</button>
                <button onClick={() => addToCart(1)}>Add to cart</button>
                <button onClick={() => increaseQuantity(1)}>Increase Quantity</button>
                <button onClick={() => decreaseQuantity(1)}>Decrease Quantity</button>
                <button onClick={() => removeFromCart(1)}>Remove From cart</button>
            </ul>
        </div >
    )
}

export default cart