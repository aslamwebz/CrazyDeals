import React, { Component } from 'react'
import styled from 'styled-components'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Image from './Image'

// const Div = styled.div`

// .owl-theme {
//   position: relative;
//   transistion:all 1s ease-in-out;
//   .owl-next, .owl-prev {
//     width: 40px;
//     height: 80px;
//     margin-top: -20px;
//     position: absolute;
//     top: 40%;
//     border-radius:20px;
//     background: rgba(255,255,255,0.32) !important;
//   }
//   .owl-prev {
//     left: 10px;
//   }
//   .owl-next {
//     right: 10px;
//   }
//   .owl-next span, .owl-prev span{
//       font-size:40px !important;
//   }
//   .text{
//       position:absolute;
//   }
// }`

export default class ItemSlider extends Component {

    render() {
        return (
            <div >
                <OwlCarousel
                    items={4}
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
            </div >
        )
    }
}

