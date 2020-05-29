import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Axios from 'axios'

import Image from './Image'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions'
const Div = styled.div`

.container{
    height:100% !important;
    display:flex;
    align-items:center;
    justify-content:center;
}

img{
    height:300px;
}


// .owl-theme {
//   position: relative;
//   transistion:all 1s ease-in-out;
//   .owl-next, .owl-prev {
//     width: 40px;
//     height: 80px;
//     margin-top: -20px;
//     position: absolute;
//     top: 40%;
//     border-radius:20px;
//     background: rgba(255,255,255,0.32) !important;
//   }
//   .owl-prev {
//     left: 10px;
//   }
//   .owl-next {
//     right: 10px;
//   }
//   .owl-next span, .owl-prev span{
//       font-size:40px !important;
//   }
//   .text{
//       position:absolute;
//   }

.image-carousel{
    height:200px !important;
    width:700px;
}


}`

const Item = (props) => {


    const [images, setImages] = useState([]);
    const { id } = props.match.params
    const [cart, setCart] = useState([])


    useEffect(() => {
        getImages()
        createCart()
        fetchCart()
    }, [])

    const getImages = () => {
        Axios.get('/api/products/' + id + '/images')
            .then(res => {
                setImages(res.data.images)
            }
            )
    }

    const imagePath = `images/electronics/${id}/`

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

        const productExist = cart.find(item => item.id === parseInt(id))
        console.log(productExist)
        if (productExist && productExist.id === product.id) {
            increaseQuantity(parseInt(id))
        } else {
            let newCart = [...cart, product]
            localStorage.setItem('cart', JSON.stringify(newCart))
            let lcart = JSON.parse(localStorage.getItem('cart'))
            setCart(lcart)
            console.log("asd")

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



    return (

        <Div>
            <p>Fix image border</p>
            <p>Fix seller</p>
            <p>fix carousel</p>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_1280.jpg" />

                        <div className="image-carousel">
                            {images.map(img => {
                                return <Image key={img.id} image={imagePath + img.image_name} />
                            })}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>COOL GREEN DRESS WITH RED BELL</h2>
                        <br />
                        <h1>Price</h1>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, porro eligendi. Quod fugit eligendi voluptates repellat maxime, vitae quidem sed!</p>
                        <br />
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product-page-options">
                                    <label className="control-label">Size:</label>
                                    <select className="form-control input-sm">
                                        <option>L</option>
                                        <option>M</option>
                                        <option>XL</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="control-label">Color:</label>

                                <select className="form-control input-sm">
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>Black</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-4">
                                <input type="number" className="form-control" value="1" readOnly />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-large btn-danger" onClick={() => addToCart(id)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

const mapStateToProps = state => [{
    cart: state.cart.cart
}]

export default connect(mapStateToProps, { addToCart })(Item)
