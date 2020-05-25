import React from 'react'
import styled from 'styled-components'
import './styleCard.css';
import Product from '../Product/Product';

const Div = styled.div`

margin:30px;

.row{
    height:500px;
    display:flex;
    justify-content:center;
}
`;


const ShowCards = () => {
    return (
        <Div>
            <div class="container-fluid">
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div class="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </Div >
    )
}

export default ShowCards
