import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
.product {
    position: relative;
    perspective: 800px;
    width: 306px;
    height: 471px;
    transform-style: preserve-3d;
    transition: transform 5s;
    float: left;
    margin-right: 23px;
    -webkit-transition: width 500ms ease-in-out;
    -moz-transition: width 500ms ease-in-out;
    -ms-transition: width 500ms ease-in-out;
    -o-transition: width 500ms ease-in-out;
    transition: width 500ms ease-in-out;
}

.product-front img {
    width: 100%;
}

.product-front,
.product-back {
    width: 315px;
    height: 480px;
    background: #fff;
    position: absolute;
    left: -5px;
    top: -5px;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
}

.product-back {
    display: none;
    transform: rotateY(180deg);
}

.make3D.animate .product-back,
.make3D.animate .product-front,
div.large .product-back {
    top: 0px;
    left: 0px;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
}

.make3D {
    width: 305px;
    height: 470px;
    position: absolute;
    top: 10px;
    left: 10px;
    overflow: hidden;
    transform-style: preserve-3d;
    -webkit-transition: 100ms ease-out;
    -moz-transition: 100ms ease-out;
    -o-transition: 100ms ease-out;
    transition: 100ms ease-out;
}

div.make3D.flip-10 {
    -webkit-transform: rotateY(-10deg);
    -moz-transform: rotateY(-10deg);
    -o-transform: rotateY(-10deg);
    transform: rotateY(-10deg);
    transition: 50ms ease-out;
}

div.make3D.flip90 {
    -webkit-transform: rotateY(90deg);
    -moz-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    transform: rotateY(90deg);
    transition: 100ms ease-in;
}

div.make3D.flip190 {
    -webkit-transform: rotateY(190deg);
    -moz-transform: rotateY(190deg);
    -o-transform: rotateY(190deg);
    transform: rotateY(190deg);
    transition: 100ms ease-out;
}

div.make3D.flip180 {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
    transition: 150ms ease-out;
}

.make3D.animate {
    top: 5px;
    left: 5px;
    width: 315px;
    height: 480px;
    box-shadow: 0px 5px 31px -1px rgba(0, 0, 0, 0.15);
    -webkit-transition: 100ms ease-out;
    -moz-transition: 100ms ease-out;
    -o-transition: 100ms ease-out;
    transition: 100ms ease-out;
}

div.large .make3D {
    top: 0;
    left: 0;
    width: 315px;
    height: 480px;
    -webkit-transition: 300ms ease-out;
    -moz-transition: 300ms ease-out;
    -o-transition: 300ms ease-out;
    transition: 300ms ease-out;
}

.large div.make3D {
    box-shadow: 0px 5px 31px -1px rgba(0, 0, 0, 0);
}

.large div.flip-back {
    display: none;
}

`

const Product = () => {
    return (
        <Div>
            <div className="product">
                <div className="info-large">
                    <h4>PLEAT PRINTED DRESS</h4>
                    <div className="sku">
                        PRODUCT SKU: <strong>89356</strong>
                    </div>

                    <div className="price-big">
                        <span>$43</span> $39
            </div>

                    <h3>COLORS</h3>
                    <div className="colors-large">
                        <ul>
                            <li><a href="/itemlist" style={{ background: ' #222' }}><span></span></a></li>
                            <li><a href="/itemlist" style={{ background: '#6e8cd5' }}><span></span></a></li>
                            <li><a href="/itemlist" style={{ background: '#f56060' }}><span></span></a></li>
                            <li><a href="/itemlist" style={{ background: '#44c28d' }}><span></span></a></li>
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
                <div className="make3D">
                    <div className="product-front">
                        <div className="shadow"></div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" />
                        <div className="image_overlay"></div>
                        <div className="add_to_cart">Add to cart</div>
                        <div className="view_gallery">View gallery</div>
                        <div className="stats">
                            <div className="stats-container">
                                <span className="product_price">$39</span>
                                <span className="product_name">PLEAT PRINTED DRESS</span>
                                <p>Summer dress</p>

                                <div className="product-options">
                                    <strong>SIZES</strong>
                                    <span>XS, S, M, L, XL, XXL</span>
                                    <strong>COLORS</strong>
                                    <div className="colors">
                                        <div className="c-blue"><span></span></div>
                                        <div className="c-red"><span></span></div>
                                        <div className="c-white"><span></span></div>
                                        <div className="c-green"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-back">
                        <div className="shadow"></div>
                        <div className="carousel">
                            <ul className="carousel-container">
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
                                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                            </ul>
                            <div className="arrows-perspective">
                                <div className="carouselPrev">
                                    <div className="y"></div>
                                    <div className="x"></div>
                                </div>
                                <div className="carouselNext">
                                    <div className="y"></div>
                                    <div className="x"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flip-back">
                            <div className="cy"></div>
                            <div className="cx"></div>
                        </div>
                    </div>
                </div>
            </div >

        </Div>
    )
}

export default Product
