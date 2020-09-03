import React, { useState, useEffect } from 'react'
import Product from './Product'
import styled from 'styled-components'
import Axios from 'axios'

const FeaturedOne = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        Axios.get('/api/getFeaturedElectronics')
            .then(res => {
                setproducts(res.data.data)
            })
    }, [])
    return (
        <Div>
            <div className="col-md-12 text-center">
                <h2 id="title">Featured Tech Deals</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="card-group">
                    {products.map(product => { return <Product key={product.id} product={product} /> }
                    )}
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
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
export default FeaturedOne
