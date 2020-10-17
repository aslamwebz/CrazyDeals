
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const Div = styled.div`
.card{
    height:33 0px;
    width:280px;
    margin:10px;
    padding:10px;
}

.card .img-wrap{
    width: 270px;
    height: 270px;
    float: none;
}
.card img{
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;

}

.card-title{
    font-size:15px;
    font-weight:500;
    color:black;
}


a{
    text-decoration: none;
    color:white;
}

.card-text{
    font-size: 15px;
    color: #0099e5;
    font-weight:500;
}

span.rating{
    font-size:15px;
    color:black;
}

span.rating .grey{
    font-size:15px;
    color:grey;
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

`

const Product = ({ product }) => {

    // const [images, setImages] = useState([]);
    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     getProduct()
    //     // getImages()
    // }, [])

    // const getProduct = () => {
    //     Axios.get('/api/electronics/' + 1)
    //         .then(res => {
    //             setProduct(res.data.product)
    //         }
    //         )
    // }

    // const getImages = () => {
    //     Axios.get('/api/electronics/' + 1 + '/images')
    //         .then(res => {
    //             setImages(res.data.eimages)
    //         }
    //         )
    // }

    // const image = `images/electronics/${product.id}/${product.image}`
    const img = `images/${product.image}`

    const data = () => {
        return <div className="product">
            <div className="card text-left">
                <div className="img-wrap">
                    <img className="card-img-top" src={img} alt="" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>

                    <p className="card-text">

                        <span className="priceNow">${product.price - product.discount}.00</span>
                        <span className="price">${product.price}.00</span>

                    </p>
                </div>
            </div>
        </div >
    }

    const itemPath = `/item/${product.category}/${product.id}`

    return (
        <Div>
            <a href={itemPath} >{data()}</a>
        </Div>
    )
}

export default Product
