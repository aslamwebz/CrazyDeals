import React from 'react'
import Product from '../Product/Product'
import styled from 'styled-components'

const Div = styled.div`
h3{
    text-align:center;
    margin:20px;
}

.card-group{
    height:600px;
    display:flex;
    justify-content:center;
}
`

const NewArrivals = () => {
    return (
        <Div className="container-fluid p-3 ">
            <h3 className="text-center">New Arrivals</h3>
            <div className="card-group">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </Div>
    )
}

export default NewArrivals