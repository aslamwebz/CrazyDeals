import React, { useEffect, useState } from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Axios from 'axios'
import Header from '../components/Header'

// import Image from './Image'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions'
import FeaturedOne from '../components/Featured/FeaturedOne'
import Spinner from '../components/others/Spinner'
import Details from './Details';
const Div = styled.div`

margin-top:120px:
padding: 120px 40px;
min-height:400px;
img{
    height:300px;
}

span.price{
    font-size:13px;
   color:black;
   text-decoration: line-through;
   margin-left:5px;
}

span.priceNow{
   background:#3490dc;
   color:#fff;
   padding: 6px 10px;
}


}`

const Item = (props) => {


    const { id, category } = props.match.params
    const [item, setItem] = useState([]);
    const [images, setImages] = useState([]);
    const [cart, setCart] = useState([])
    const [selectedQuantity, setSelectedQuantity] = useState(1)


    useEffect(() => {
        getItem()
        // getImages()
        createCart()
        fetchCart()
    }, [])

    const getItem = () => {
        if (category === "electronics") {
            AxiosRun('/api/electronics/')
        }

        if (category === "mobile") {
            AxiosRun('/api/mobile/')
        }

        if (category === "fashion") {
            AxiosRun('/api/fashion/')
        }
    }

    const AxiosRun = (url) => {
        Axios.get(url + id)
            .then(res => {
                setItem(res.data.product)

            }
            )
    }

    // const getImages = () => {
    //     Axios.get('/api/electronics/' + id + '/images')
    //         .then(res => {
    //             setImages(res.data.eimages)
    //         }
    //         )
    // }

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
        let product = await Axios.get('/api/electronics/' + id)
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



    const sizes = () => {
        if (item.sizes) {
            const s = item.sizes.map(size => {
                return <option value={size} key={size}>{size}</option>
            })
            return <div className="col-md-4">
                <div className="product-page-options">
                    <label className="control-label">Sizes:</label>
                    <select className="form-control input-sm">
                        {s}
                    </select>

                </div>
            </div>
        }
    }


    const colors = () => {
        if (item.colors) {
            const c = item.colors.map(color => {
                return <option value={color} key={color}>{color}</option>
            })
            return <div className="col-md-4">
                <div className="product-page-options">
                    <label className="control-label">Colors:</label>
                    <select className="form-control input-sm">
                        {c}
                    </select>

                </div>
            </div>
        }
    }


    return (

        <div>
            <Header />
            <Spinner />
            <div className="row ">
                <div className="col-md-12">
                    <div className="card text-left">
                        <div className="card-body">
                            <Div className="m-4">
                                <div className="row ">
                                    <div className="col-md-4">
                                        <img className=" m-auto d-block" src={"/images/" + item.image} />

                                        {/* <div className="image-carousel">
                                            {images.map(img => {
                                                return <Image key={img.id} image={imagePath + img.image_name} />
                                            })}
                                        </div> */}
                                    </div>
                                    <div className="col-md-5">
                                        <h3>{item.name}</h3>
                                        <br />

                                        <span className="priceNow">${item.price - item.discount}.00</span>
                                        <span className="price">${item.price}.00</span>

                                        <br />
                                        <div className="row">
                                            {sizes()}
                                            {colors()}
                                        </div>
                                        <br />
                                        <p>Shipping:  Free Shipping</p>
                                        <br />
                                        <p>Available: {item.available} </p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <input type="number" className="form-control" value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)} min={1} max={item.available} />
                                            </div>
                                            <div className="col-md-4">
                                                <button className="btn btn-large btn-danger" onClick={() => addToCart(id)}>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className=" row">
                                            <div className="card col-md-12">
                                                <div className="card-body">
                                                    <h4 className="card-title">Top Rated Plus</h4>
                                                    <p className="card-text">Trusted seller, fast shipping, and easy returns. </p>
                                                </div>
                                            </div>
                                            <div className="card col-md-12" >
                                                <div className="card-body">
                                                    <h4 className="card-title">Money Back Guarantee</h4>
                                                    <p className="card-text">Get the item you ordered or get your money back</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Div>

                            <div className="row">
                                <div className="card  text-white bg-secondary mb-3 container" >
                                    <div class="card-header">
                                        <ul class="nav nav-tabs card-header-tabs">
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#">Description</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body text-center">

                                        <div className="row">
                                            <div className="col-md-4">
                                                <Details category={item.category} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <FeaturedOne />
        </div >
    )
}

const mapStateToProps = state => [{
    cart: state.cart.cart
}]

export default connect(mapStateToProps, { addToCart })(Item)
