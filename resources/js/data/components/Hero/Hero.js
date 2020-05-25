import React from 'react'
import styled from 'styled-components'


const Hero = () => {
    const IMG = styled.div`
    // /* The hero image */
    .hero-image {
      background:url(https://cdn.pixabay.com/photo/2020/02/24/02/49/female-4875046_1280.jpg);
      height: 400px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      padding:10px;
      margin:10px;
    }
    
    .hero-text {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }`

    return (
        <a href="/">
            <IMG >
                <div className="img hero-image">
                    <div className="hero-text">
                        <h1>I am John Doe</h1>
                        <p>And I'm a Photographer</p>
                        <button>Hire me</button>
                    </div>
                </div>
            </IMG>
        </a >
    )
}

export default Hero
