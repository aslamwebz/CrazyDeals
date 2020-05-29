import React, { useEffect, useState } from 'react'
import { loadLogic } from './Logic'
import styled from 'styled-components'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const Div = styled.div`
a{
    text-decoration: none;
    color:black;
}
`

const Product = ({ product }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        loadLogic()
        getImages()
    }, [])

    const getImages = () => {
        Axios.get('/api/products/' + product.id + '/images')
            .then(res => {
                setImages(res.data.images)
            }
            )
    }

    // const image = `images/electronics/${product.id}/${product.image}`
    const img = `images/electronics/1/${product.image}`

    const data = () => {
        return <div className="product" >
            <div className="info-large">
                <div className="sku">
                    PRODUCT SKU: <strong>89356</strong>
                </div>

                <div className="price-big">
                    <span>$43</span> $39zs
    </div>

                <h3>COLORS</h3>
                <div className="colors-large">
                    <ul>
                        <li><p href="/itemlist" style={{ background: ' #222' }}><span></span></p></li>
                        <li><p href="/itemlist" style={{ background: '#6e8cd5' }}><span></span></p></li>
                        <li><p href="/itemlist" style={{ background: '#f56060' }}><span></span></p></li>
                        <li><p href="/itemlist" style={{ background: '#44c28d' }}><span></span></p></li>
                    </ul >
                </div >

                <h3>SIZE</h3>
                <div className="sizes-large">
                    <span>XS</span>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                </div>

                <button className="add-cart-large">Add To Cart</button>

            </div >
            <div className="make3D"  >
                <div className="product-front">
                    <div className="shadow"></div>
                    <img src={img} alt="" />
                    <div className="stats">
                        <div className="stats-container">
                            <span className="product_name">{product.name}</span>
                            <br />
                            <br />
                            <span className="product_price">${product.price}</span>
                            <p>Free Shipping</p>
                            <p>108 SOLD</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >


    }

    const itemPath = `item/${product.id}`

    return (
        <Div>
            <Link to={itemPath} >{data()}</Link>
        </Div>
    )
}

export default Product
