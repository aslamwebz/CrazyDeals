import Axios from 'axios'
//? get product by category
export const getProduct = async (id, category) => {
    let product = []
    if (category === "electronics") {
        product = await AxiosRun(`/api/electronics/${id}`)
    }

    if (category === "mobile") {
        product = await AxiosRun(`/api/mobile/${id}`)
    }

    if (category === "fashion") {
        product = await AxiosRun(`/api/fashion/${id}`)
    }

    return product
}

//? get the product
export const AxiosRun = async (url) => {
    let product = []
    product = await Axios.get(url)
        .then(res => {
            let p = res.data.product
            return p
        }
        )

    return product
}

export const createCart = () => {
    if (!localStorage.getItem('cart')) {
        let cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
    }

}

//? fetch current cart
export const fetchCart = async () => {
    createCart()
    let cart = await JSON.parse(localStorage.getItem('cart'))
    return cart
}

export const addItemToCart = async (id, category) => {

    if (id) {
        createCart()
        //?get product and cart
        let product = await getProduct(id, category)
        let cart = await fetchCart()

        //? check product exists
        const productExist = cart.find(item => item.name === product.name)
        //? if product exits increse product quantity
        if (productExist && productExist.name === product.name) {
            quantityIncrease(product.name)
        } else {
            product = { ...product, quantity: 1 }
            let newCart = [...cart, product]
            localStorage.setItem('cart', JSON.stringify(newCart))
            let lcart = JSON.parse(localStorage.getItem('cart'))
            return lcart
        }
    }
}

export const clearCart = () => {
    let newCart = []
    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const quantityIncrease = async (name) => {
    let cart = await fetchCart()
    const newCart = await cart.map(item => {
        if (item.name === name) {
            item.quantity++
            return item
        } else {
            return item
        }
    })

    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const quantityDecrease = async (name) => {
    let cart = await fetchCart()
    const newCart = await cart.map(item => {
        if (item.name === name) {
            item.quantity--
            return item
        } else {
            return item
        }
    })

    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const removeItemFromCart = async (name) => {
    let cart = await fetchCart()
    const newCart = cart.filter(item => {
        return item.name !== name
    })
    localStorage.setItem('cart', JSON.stringify(newCart))
}

