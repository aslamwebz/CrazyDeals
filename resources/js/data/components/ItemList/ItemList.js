import React from 'react'
import './style.css'
import './Logic'
import Sidebar from '../Sidebar/Sidebar'

const ItemList = () => {

    return (
        <div>
            <div id="wrapper">
                <Sidebar />


                <div id="grid-selector">
                    <div id="grid-menu">
                        View:
                    <ul>
                            <li className="largeGrid"><a href="/itemlist"></a></li>
                            <li className="smallGrid"><a className="active" href=""></a></li>
                        </ul>
                    </div>
                    Showing 1–9 of 48 results
                </div>

                <div className="container-fluid">
                    <div id="grid">
                        <div className="product">
                            <div className="info-large">
                                <h4>FLUTED HEM DRESS</h4>
                                <div className="sku">
                                    PRODUCT SKU: <strong>89356</strong>
                                </div>

                                <div className="price-big">
                                    <span>$43</span> $39
            </div>

                                <h3>COLORS</h3>
                                <div className="colors-large">
                                    <ul>
                                        <li><a href="/itemlist" style={{ background: '#222' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#6e8cd5' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#f56060' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#44c28d' }}><span></span></a></li>
                                    </ul>
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
                                            <span className="product_name">FLUTED HEM DRESS</span>
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
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
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
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg" alt="" />
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

                        <div className="product">
                            <div className="info-large">
                                <h4>FLOWY SHIRT DRESS</h4>
                                <div className="sku">
                                    PRODUCT SKU: <strong>89356</strong>
                                </div>

                                <div className="price-big">
                                    <span>$43</span> $39
            </div>

                                <h3>COLORS</h3>
                                <div className="colors-large">
                                    <ul>
                                        <li><a href="/itemlist" style={{ background: '#222' }}><span></span></a></li>
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
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" />
                                    <div className="image_overlay"></div>
                                    <div className="add_to_cart">Add to cart</div>
                                    <div className="view_gallery">View gallery</div>
                                    <div className="stats">
                                        <div className="stats-container">
                                            <span className="product_price">$39</span>
                                            <span className="product_name">FLOWY SHIRT DRESS</span>
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
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg" alt="" /></li>
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


                        <div className="product">
                            <div className="info-large">
                                <h4>DOUBLE LAYER DRESS</h4>
                                <div className="sku">
                                    PRODUCT SKU: <strong>89356</strong>
                                </div>

                                <div className="price-big">
                                    <span>$43</span> $39
            </div>

                                <h3>COLORS</h3>
                                <div className="colors-large">
                                    <ul>
                                        <li><a href="/itemlist" style={{ background: '#222' }}><span></span></a></li>
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
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" />
                                    <div className="image_overlay"></div>
                                    <div className="add_to_cart">Add to cart</div>
                                    <div className="view_gallery">View gallery</div>
                                    <div className="stats">
                                        <div className="stats-container">
                                            <span className="product_price">$39</span>
                                            <span className="product_name">DOUBLE LAYER DRESS</span>
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
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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

                        <div className="product">
                            <div className="info-large">
                                <h4>BEAD DETAIL DRESS</h4>
                                <div className="sku">
                                    PRODUCT SKU: <strong>89356</strong>
                                </div>

                                <div className="price-big">
                                    <span>$43</span> $39
            </div>

                                <h3>COLORS</h3>
                                <div className="colors-large">
                                    <ul>
                                        <li><a href="/itemlist" style={{ background: '#222' }}><span></span></a></li>
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
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" />
                                    <div className="image_overlay"></div>
                                    <div className="add_to_cart">Add to cart</div>
                                    <div className="view_gallery">View gallery</div>
                                    <div className="stats">
                                        <div className="stats-container">
                                            <span className="product_price">$39</span>
                                            <span className="product_name">BEAD DETAIL DRESS</span>
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
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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


                        <div className="product">
                            <div className="info-large">
                                <h4>PLEATED DETAIL DRESS</h4>
                                <div className="sku">
                                    PRODUCT SKU: <strong>89356</strong>
                                </div>

                                <div className="price-big">
                                    <span>$43</span> $39
            </div>

                                <h3>COLORS</h3>
                                <div className="colors-large">
                                    <ul>
                                        <li><a href="/itemlist" style={{ background: '#222' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#6e8cd5' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#9b887b' }}><span></span></a></li>
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
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" />
                                    <div className="image_overlay"></div>
                                    <div className="add_to_cart">Add to cart</div>
                                    <div className="view_gallery">View gallery</div>
                                    <div className="stats">
                                        <div className="stats-container">
                                            <span className="product_price">$39</span>
                                            <span className="product_name">PLEATED DETAIL DRESS</span>
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
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/6.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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

                        <div className="product">
                            <div className="info-large">
                                <h4>PRINTED DRESS</h4>
                                <div className="sku">
                                    PRODUCT SKU: <strong>89356</strong>
                                </div>

                                <div className="price-big">
                                    <span>$43</span> $39
            </div>

                                <h3>COLORS</h3>
                                <div className="colors-large">
                                    <ul>
                                        <li><a href="/itemlist" style={{ background: '#222' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#6e8cd5' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#9b887b' }}><span></span></a></li>
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
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" />
                                    <div className="image_overlay"></div>
                                    <div className="add_to_cart">Add to cart</div>
                                    <div className="view_gallery">View gallery</div>
                                    <div className="stats">
                                        <div className="stats-container">
                                            <span className="product_price">$39</span>
                                            <span className="product_name">PRINTED DRESS</span>
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
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5.jpg" alt="" /></li>
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

                        <div className="product">
                            <div className="info-large">
                                <h4>PRINTED DRESS</h4>
                                <div className="sku">
                                    PRODUCT SKU: <strong>89356</strong>
                                </div>

                                <div className="price-big">
                                    <span>$43</span> $39
            </div>

                                <h3>COLORS</h3>
                                <div className="colors-large">
                                    <ul>
                                        <li><a href="/itemlist" style={{ background: '#222' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#6e8cd5' }}><span></span></a></li>
                                        <li><a href="/itemlist" style={{ background: '#9b887b' }}><span></span></a></li>
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
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/8.jpg" alt="" />
                                    <div className="image_overlay"></div>
                                    <div className="add_to_cart">Add to cart</div>
                                    <div className="view_gallery">View gallery</div>
                                    <div className="stats">
                                        <div className="stats-container">
                                            <span className="product_price">$39</span>
                                            <span className="product_name">PRINTED DRESS</span>
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
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/8.jpg" alt="" /></li>
                                            <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/7.jpg" alt="" /></li>
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
                    </div >
                </div>
            </div >
        </div >
    )
}

export default ItemList
