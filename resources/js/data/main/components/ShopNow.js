import React from 'react'
import styled from 'styled-components'

const ShopNow = () => {
    return (
        <Div>
            <div className="row no-gutters pb-5">
                <div className="col-sm-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src="images/a1.jpg" alt="" />
                        <div className="overlay">
                            <h5>women's fashion</h5>
                            <a className="info" href="/items/fashion">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src="images/a2.jpg" alt="" />
                        <div className="overlay">
                            <h5>men's fashion</h5>
                            <a className="info" href="/items/fashion">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="hovereffect">
                        <img className="img-fluid" src="images/a3.jpg" alt="" />
                        <div className="overlay">
                            <h5>kid's fashion</h5>
                            <a className="info" href="/items/fashion">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
max-width:1650px;
margin:50px auto;
.hovereffect {
    width: 100%;
    height: auto;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
}

.hovereffect .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out
}

.hovereffect img {
    display: block;
    position: relative;
    -webkit-transition: all .4s linear;
    transition: all .4s linear;
}

.hovereffect h5 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 1.8em;
    letter-spacing: 5px;
    background: rgba(0, 0, 0, 0.6);
    -webkit-transform: translatey(-100px);
    -ms-transform: translatey(-100px);
    transform: translatey(-100px);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    padding: 80px;
}

.hovereffect a.info {
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    font-size: 1em;
    letter-spacing: 3px;
    filter: alpha(opacity=0);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    margin: 50px 0 0;
    padding: 7px 30px;
    font-weight: 600;
    background: transparent;
    border: 1px solid #fff;
}

.hovereffect a.info:hover {
    box-shadow: 0 0 5px #fff;
}

.hovereffect:hover img {
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

.hovereffect:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
}

.hovereffect:hover h5,
.hovereffect:hover a.info {
    opacity: 1;
    filter: alpha(opacity=100);
    -ms-transform: translatey(0);
    -webkit-transform: translatey(0);
    transform: translatey(0);
}

.hovereffect:hover a.info {
    -webkit-transition-delay: .2s;
    transition-delay: .2s;
}
`

export default ShopNow
