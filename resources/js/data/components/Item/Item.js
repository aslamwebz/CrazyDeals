import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Image from './Image'
import styled from 'styled-components'

const Div = styled.div`

.container{
    height:100% !important;
}

.owl-theme {
  position: relative;
  transistion:all 1s ease-in-out;
  .owl-next, .owl-prev {
    width: 40px;
    height: 80px;
    margin-top: -20px;
    position: absolute;
    top: 40%;
    border-radius:20px;
    background: rgba(255,255,255,0.32) !important;
  }
  .owl-prev {
    left: 10px;
  }
  .owl-next {
    right: 10px;
  }
  .owl-next span, .owl-prev span{
      font-size:40px !important;
  }
  .text{
      position:absolute;
  }
}`

const Item = () => {
    return (
        <Div>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row ">
                    <div className="col-md-6">
                        <OwlCarousel
                            items={1}
                            className="owl-theme"
                            loop
                            nav
                            center
                            autoplay
                            margin={0}>
                            <Image image="https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_1280.jpg" />
                            <Image image="https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_1280.jpg" />
                            <Image image="https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_1280.jpg" />
                        </OwlCarousel>
                    </div>
                    <div className="col-md-6">
                        <h2>COOL GREEN DRESS WITH RED BELL</h2>
                        <br />
                        <h1>Price</h1>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, porro eligendi. Quod fugit eligendi voluptates repellat maxime, vitae quidem sed!</p>
                        <br />
                        <div className="row">
                            <div className="col-md-4">
                                <div className="product-page-options">
                                    <label className="control-label">Size:</label>
                                    <select className="form-control input-sm">
                                        <option>L</option>
                                        <option>M</option>
                                        <option>XL</option>
                                    </select>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="control-label">Color:</label>

                                <select className="form-control input-sm">
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>Black</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-4">
                                <input type="number" className="form-control" value="1" onChange={console.log('')} />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-large btn-danger">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Item
