import React from 'react'
import styled from 'styled-components'
import './styleCard.css';
import ProductC from '../Product/ProductC';

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
            <div className="container-fluid">
                <div className="row">
                    <ProductC />
                    <ProductC />
                    <ProductC />
                    <ProductC />
                    <ProductC />
                </div>
                <div className="row">
                    <ProductC />
                    <ProductC />
                    <ProductC />
                    <ProductC />
                    <ProductC />
                </div>
            </div>
        </Div >
    )
}

export default ShowCards
