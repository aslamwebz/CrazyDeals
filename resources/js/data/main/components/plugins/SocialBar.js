import React from 'react'
import styled from 'styled-components'

const SocialBar = () => {
    return (
        <Div>
            <div className="icons-container">
                <div className="social-icons spinned">
                    <a className="item facebook" href="#"><em className="fab fa-facebook"></em></a>
                    <a className="item twitter" href="#"><em className="fab fa-twitter"></em></a>
                    <a className="item google" href="#"><em className="fab fa-google"></em></a>
                    <a className="item linkedin" href="#"><em className="fab fa-linkedin"></em></a>
                    <a className="item instagram" href="#"><em className="fab fa-instagram"></em></a>
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
    
/* -------------------------------- 

Primary style

-------------------------------- */
*, *::after, *::before {
  box-sizing: border-box;
}

a {
  color: #26a69a;
  text-decoration: none;
}

/* -------------------------------- 

Main Components 

-------------------------------- */
.icons-container{
    height: 100px;
    width: 400px;

}

.social-icons .item {
    display: inline-block;
    margin: 5px;
    width: 50px;
    height: 50px;
    transition: .3s all;
    position: relative;
    -webkit-transition: .3s all;
    text-align: center;
    color: #fff;
    background-color: #fff;
    line-height: 52px;
    border-radius: 50px;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);
    -moz-box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);
    box-shadow: 0px 5px 11px 0px rgba(0,0,0,0.18), 0px 4px 15px 0px rgba(0,0,0,0.15);
}

.social-icons.spinned .item:hover {
    -webkit-animation: Social-Icons-Flipping .3s;
    animation: Social-Icons-Flipping .3s
}
.social-icons .item:hover {
    text-decoration: none;
    background-color: #42474E;
    box-shadow: 0 -1px 0 transparent inset, 0 2px 3px rgba(0, 0, 0, .1), 0 4px 8px rgba(0, 0, 0, .3);
    color: #fff!important
}
.social-icons .item .fab {
    font-size: 20px;
    font-weight: 500;
}

.social-icons .facebook {
    color: #425F9C!important
}
.social-icons .twitter {
    color: #00ACEE!important
}
.social-icons .google {
    color: #c00!important
}
.social-icons .linkedin {
    color: #0073B2!important
}
.social-icons .youtube {
    color: #EB3E40!important
}
.social-icons .instagram {
    color: #5E8AAC!important
}

.facebook:hover {
    background-color: #425F9C!important
}
.twitter:hover {
    background-color: #00ACEE!important
}
.google:hover {
    background-color: #c00!important
}
.linkedin:hover {
    background-color: #0073B2!important
}
.youtube:hover {
    background-color: #EB3E40!important
}
.instagram:hover {
    background-color: #5E8AAC!important
}

@-webkit-keyframes Social-Icons-Flipping {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
@keyframes Social-Icons-Flipping {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
    `

export default SocialBar