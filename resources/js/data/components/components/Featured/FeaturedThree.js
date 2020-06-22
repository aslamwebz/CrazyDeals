import React, { useState, useEffect } from 'react'
import Product from './Product'
import styled from 'styled-components'
import Axios from 'axios'

const FeaturedThree = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        Axios.get('/api/getFeaturedFashion')
            .then(res => {
                setproducts(res.data.data)
            })
    }, [])
    return (
        <Div >
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 id="title">Featured Fashion Deals</h2>
                </div>
            </div>
            <div className="card-group">
                {products.map(product => { return <Product key={product.id} product={product} /> }
                )}
            </div>
        </Div>
    )
}

const Div = styled.div`
max-width:1650px;
margin:100px auto;

#title{
    position: relative;
    display: inline-block;
    font-size: 28px;
    font-weight: 400;
    text-align: center;
    padding:10px;
}
#title:after{
    content: '';
position: absolute;
left: 0;
right: 0;
bottom: 0;
width: 50px;
margin: 0 auto;
height: 3px;
background: #3490dc;
}
`
export default FeaturedThree
