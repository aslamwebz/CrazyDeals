import React, { Component } from 'react'
import styled from 'styled-components'

const Data = (props) => {

    const IMG = styled.div`
    /* The hero image */
    .hero-image {
      background: url(${props.image});
      height: 85vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }
    
    /* Place text in the middle of the image */
    .hero-text {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }`

    return (
        <div >
            <IMG >
                <div className="img hero-image">
                    <div className="hero-text">
                        <h1>I am John Doe</h1>
                        <p>And I'm a Photographer</p>
                        <button>Hire me</button>
                    </div>
                </div>
            </IMG>
        </div >
    )
}


const Image = (props) => {
    return (
        <div>
            <Data image={props.image} />
        </div>
    )
}





export default Image
