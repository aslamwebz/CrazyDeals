import React, { Component } from 'react'
import styled from 'styled-components'
import { start } from './logic'

import './style.scss'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


const Div = styled.div`


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
// }
`

export default class CarouselMain extends Component {

  componentDidMount() {
    start()
  }

  render() {
    return (
      <Div >
        {/* <OwlCarousel
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
        </OwlCarousel><div className="page-slider margin-bottom-35"> */}
        <div className="swiper-container main-slider loading">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall1.jpg)' }}>
                <img src="assets/img/wall1.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Shaun Matthews</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall2.jpg)' }}>
                <img src="assets/img/wall2.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Alexis Berry</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall3.jpg)' }}>
                <img src="assets/img/wall3.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Billie	Pierce</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall4.jpg)' }}>
                <img src="assets/img/wall4.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Trevor	Copeland</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall5.jpg)' }}>
                <img src="assets/img/wall5.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Bernadette	Newman</p>
                <span className="caption">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev swiper-button-white"></div>
          <div className="swiper-button-next swiper-button-white"></div>
        </div>

        <div className="swiper-container nav-slider loading">
          <div className="swiper-wrapper" role="navigation">
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall1.jpg)' }}>
                <img src="assets/img/wall1.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Shaun Matthews</p>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall2.jpg)' }}>
                <img src="assets/img/wall2.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Alexis Berry</p>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall3.jpg)' }}>
                <img src="assets/img/wall3.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Billie	Pierce</p>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall4.jpg)' }}>
                <img src="assets/img/wall4.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Trevor	Copeland</p>
              </div>
            </div>
            <div className="swiper-slide">
              <figure className="slide-bgimg" style={{ backgroundImage: 'url(assets/img/wall5.jpg)' }}>
                <img src="assets/img/wall5.jpg" className="entity-img" />
              </figure>
              <div className="content">
                <p className="title">Bernadette	Newman</p>
              </div>
            </div>
          </div>
        </div>
      </Div >
    )
  }
}

