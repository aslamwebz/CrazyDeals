import React from 'react'
import styled from 'styled-components'

const Header2 = () => {
    return (
        <Div>
            <div className="header">
                <div className="top-header navbar navbar-expand-lg">
                    <div className="container">
                        <div className="nav navbar-nav wow fadeInLeft animated" data-wow-delay=".5s">
                            <p>Welcome to Modern Shoppe <a href="register.html">Register </a> Or <a href="signin.html">Sign In </a></p>
                        </div>
                        <div className="nav navbar-nav mr-auto social-icons wow fadeInRight animated" data-wow-delay=".5s">
                            <ul>
                                <li><a href="#"> </a></li>
                                <li><a href="#" className="pin"> </a></li>
                                <li><a href="#" className="in"> </a></li>
                                <li><a href="#" className="be"> </a></li>
                                <li><a href="#" className="you"> </a></li>
                                <li><a href="#" className="vimeo"> </a></li>
                            </ul>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="header-two navbar navbar-expand-lg">
                    <div className="container">
                        <div className="nav navbar-nav header-two-left">
                            <ul>
                                <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+1234 567 892</li>
                                <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:info@example.com">mail@example.com</a></li>
                            </ul>
                        </div>
                        <div className="nav navbar-nav logo wow zoomIn animated" data-wow-delay=".7s">
                            <h1><a href="index.html">Modern <b>Shoppe</b><span className="tag">Everything for Kids world </span> </a></h1>
                        </div>
                        <div className="nav navbar-nav mr-auto header-two-right">
                            <div className="header-right my-account">
                                <a href="contact.html"><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> CONTACT US</a>
                            </div>
                            <div className="header-right cart">
                                <a href="#"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a>
                                <h4><a href="checkout.html">
                                    <span className="simpleCart_total"> $0.00 </span> (<span id="simpleCart_quantity" className="simpleCart_quantity"> 0 </span>)
						</a></h4>
                                <div className="cart-box">
                                    <p><a href="/" className="simpleCart_empty">Empty cart</a></p>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="top-nav navbar navbar-expand-lg">
                    <div className="container">
                        <nav className="navbar" role="navigation">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav top-nav-info">
                                    <li><a href="index.html" className="active">Home</a></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Baby<b className="caret"></b></a>
                                        <ul className="dropdown-menu multi-column multi-column1">
                                            <div className="row">
                                                <div className="col-sm-4 menu-grids menulist1">
                                                    <h4>Bath & Care</h4>
                                                    <ul className="multi-column-dropdown ">
                                                        <li><a className="list" href="products.html">Diapering</a></li>
                                                        <li><a className="list" href="products.html">Baby Wipes</a></li>
                                                        <li><a className="list" href="products.html">Baby Soaps</a></li>
                                                        <li><a className="list" href="products.html">Lotions & Oils </a></li>
                                                        <li><a className="list" href="products.html">Powders</a></li>
                                                        <li><a className="list" href="products.html">Shampoos</a></li>
                                                    </ul>
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Body Wash</a></li>
                                                        <li><a className="list" href="products.html">Cloth Diapers</a></li>
                                                        <li><a className="list" href="products.html">Baby Nappies</a></li>
                                                        <li><a className="list" href="products.html">Medical Care</a></li>
                                                        <li><a className="list" href="products.html">Grooming</a></li>
                                                        <li><h6><a className="list" href="products.html">Combo Packs</a></h6></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-2 menu-grids">
                                                    <h4>Baby Clothes</h4>
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Onesies & Rompers</a></li>
                                                        <li><a className="list" href="products.html">Frocks</a></li>
                                                        <li><a className="list" href="products.html">Socks & Tights</a></li>
                                                        <li><a className="list" href="products.html">Sweaters & Caps</a></li>
                                                        <li><a className="list" href="products.html">Night Wear</a></li>
                                                        <li><a className="list" href="products.html">Quilts & Wraps</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3 menu-grids">
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Blankets</a></li>
                                                        <li><a className="list" href="products.html">Gloves & Mittens</a></li>
                                                        <h4>Shop by Age</h4>
                                                        <li><a className="list" href="products.html">New Born (0 - 5 M)</a></li>
                                                        <li><a className="list" href="products.html">5 - 10 Months</a></li>
                                                        <li><a className="list" href="products.html">10 - 15 Months</a></li>
                                                        <li><a className="list" href="products.html">15 Months Above</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3 menu-grids">
                                                    <ul className="multi-column-dropdown">
                                                        <li><h6><a className="list" href="products.html">Feeding & Nursing</a></h6></li>
                                                        <h4>Baby Gear</h4>
                                                        <li><a className="list" href="products.html">Baby Walkers</a></li>
                                                        <li><a className="list" href="products.html">Strollers</a></li>
                                                        <li><a className="list" href="products.html">Prams & Toys</a></li>
                                                        <li><a className="list" href="products.html">Cribs & Cradles</a></li>
                                                        <li><a className="list" href="products.html">Booster Seats</a></li>
                                                    </ul>
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="dropdown grid">
                                        <a href="#" className="dropdown-toggle list1" data-toggle="dropdown">Kids<b className="caret"></b></a>
                                        <ul className="dropdown-menu multi-column multi-column2">
                                            <div className="row">
                                                <div className="col-sm-3 menu-grids">
                                                    <h4>New Arrivals</h4>
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Topwear</a></li>
                                                        <li><a className="list" href="products.html">Bottomwear</a></li>
                                                        <li><a className="list" href="products.html">Innerwear</a></li>
                                                        <li><a className="list" href="products.html">Nightwear</a></li>
                                                        <li><a className="list" href="products.html">Swimwear</a></li>
                                                        <li><a className="list" href="products.html">Jumpers</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3 menu-grids">
                                                    <h4>Boys</h4>
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Jeans</a></li>
                                                        <li><a className="list" href="products.html">Shirts</a></li>
                                                        <li><a className="list" href="products.html">T-shirts</a></li>
                                                        <li><a className="list" href="products.html">Dhoti Kurta Sets</a></li>
                                                        <li><a className="list" href="products.html">Winter wear</a></li>
                                                        <li><a className="list" href="products.html">Party Wear</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3 menu-grids">
                                                    <h4>Girls</h4>
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Tops</a></li>
                                                        <li><a className="list" href="products.html">Leggings</a></li>
                                                        <li><a className="list" href="products.html">Dresses </a></li>
                                                        <li><a className="list" href="products.html">Skirts</a></li>
                                                        <li><a className="list" href="products.html">Casual Dresses</a></li>
                                                        <li><a className="list" href="products.html">Capris & 3/4ths</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-3 menu-grids new-add2">
                                                    <a href="products.html">
                                                        <h6>Kids Special</h6>
                                                        <img src="images/img1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="dropdown grid">
                                        <a href="#" className="dropdown-toggle list1" data-toggle="dropdown">Accessories<b className="caret"></b></a>
                                        <ul className="dropdown-menu multi-column menu-two multi-column3">
                                            <div className="row">
                                                <div className="col-sm-4 menu-grids">
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Jewellery</a></li>
                                                        <li><a className="list" href="products.html">Hair bands & Clips</a></li>
                                                        <li><a className="list" href="products.html">Bangles </a></li>
                                                        <li><a className="list" href="products.html">Caps & Belts</a></li>
                                                        <li><a className="list" href="products.html">Rain wear</a></li>
                                                        <li><a className="list" href="products.html">Bags</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-8 menu-grids">
                                                    <a href="products.html">
                                                        <div className="new-add">
                                                            <h5>30% OFF <br /> Today Only</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="dropdown grid">
                                        <a href="#" className="dropdown-toggle list1" data-toggle="dropdown">Toys <b className="caret"></b></a>
                                        <ul className="dropdown-menu multi-column multi-column4">
                                            <div className="row">
                                                <div className="col-sm-4 menu-grids menulist1">
                                                    <h4>BABY</h4>
                                                    <ul className="multi-column-dropdown ">
                                                        <li><a className="list" href="products.html">Rockers</a></li>
                                                        <li><a className="list" href="products.html">Rattles</a></li>
                                                        <li><a className="list" href="products.html">Stroller Toys</a></li>
                                                        <li><a className="list" href="products.html">Musical Toys </a></li>
                                                        <li><a className="list" href="products.html">Doll Houses</a></li>
                                                        <li><a className="list" href="products.html">Play Sets</a></li>
                                                    </ul>
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Toys Dolls</a></li>
                                                        <li><a className="list" href="products.html">Pacifiers</a></li>
                                                        <li><a className="list" href="products.html">Building Sets</a></li>
                                                        <li><a className="list" href="products.html">Bath Toys</a></li>
                                                        <li><a className="list" href="products.html">Soft Toys</a></li>
                                                        <li><h6><a className="list" href="products.html">Special Off</a></h6></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-2 menu-grids">
                                                    <h4>Pretend Play</h4>
                                                    <ul className="multi-column-dropdown">
                                                        <li><h6><a className="list" href="products.html">Video Games</a></h6></li>
                                                        <li><a className="list" href="products.html">Kitchen Sets</a></li>
                                                        <li><a className="list" href="products.html">Sand Toys</a></li>
                                                        <li><a className="list" href="products.html">Tool Sets</a></li>
                                                        <li><a className="list" href="products.html">Bath Toys</a></li>
                                                        <li><a className="list" href="products.html">Medical Set</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-2 menu-grids">
                                                    <h4>Outdoor</h4>
                                                    <ul className="multi-column-dropdown">
                                                        <li><a className="list" href="products.html">Swimming</a></li>
                                                        <li><a className="list" href="products.html">Rideons </a></li>
                                                        <li><a className="list" href="products.html">Scooters</a></li>
                                                        <li><a className="list" href="products.html">Remote Control</a></li>
                                                        <li><a className="list" href="products.html">Animals</a></li>
                                                        <li><a className="list" href="products.html">Make up</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4 menu-grids">
                                                    <a href="products.html">
                                                        <div className="new-add">
                                                            <h5>30% OFF <br /> Today Only</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="clearfix"> </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li><a href="codes.html">Special Offers</a></li>
                                </ul>
                                <div className="clearfix"> </div>

                                <header className="cd-main-header">
                                    <ul className="cd-header-buttons">
                                        <li><a className="cd-search-trigger" href="#cd-search"> <span></span></a></li>
                                    </ul>
                                </header>
                            </div>

                        </nav>
                        <div id="cd-search" className="cd-search">
                            <form>
                                <input type="search" placeholder="Search..." />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}




const Div = styled.div`
                    .navbar.navbar-expand-lg {
                            background: #fff;
                        margin: 0;
                        border-top: none;
                        min-height: 40px;
                        display:flex;
                    }
.navbar-right {
                            margin - right: 0;
                    }
.top-header p,.top-header h2 {
                            font - size: 0.9em;
                        color: #353F49;
                        line-height: 1.8em;
                        margin-top: .8em;
                        letter-spacing: 1px;
                        font-weight: 500;
                        font-family: 'Raleway', sans-serif;
                    }
.top-header p a,.top-header h2 a{
                            color: #ff5a10;
                        padding: 0 7px;
                        -webkit-transition:.5s all;
                        -moz-transition:.5s all;
                        transition:.5s all;
                    }
.top-header p a:hover,.top-header h2  a:hover{
                            color: #33414e;
                    }
                    /*--social-icons--*/
.social-icons {
                            margin - top: 0.5em;
                    }
.social-icons ul li {
                            display: inline-block;
                        margin-left: 1em;
                    }
.social-icons ul li a {
                            background: url(../images/social-icons.png)no-repeat -3px -2px;
                        display: block;
                        height: 22px;
                        width: 20px;
                        -webkit-transition: .5s all;
                        transition: .5s all;
                        -moz-transition: .5s all;
                        padding: 0;
                    }
.social-icons ul li a.pin {
                            background - position: -3px -38px;
                    }
.social-icons ul li a.in {
                            background - position: -3px -78px;
                    }
.social-icons ul li a.be {
                            background - position: -3px -115px;
                    }
.social-icons ul li a.you {
                            background - position: -3px -154px;
                    }
.social-icons ul li a.vimeo {
                            background - position: -2px -192px;
                    }
.social-icons ul li a:hover{
                            -webkit - transform:rotateY(360deg);
                        transform:rotateY(360deg);
                        -moz-transform:rotateY(360deg);
                        -o-transform:rotateY(360deg);
                        -ms-transform:rotateY(360deg);
                    }
                    /*--header-two--*/
.header-two-left {
                            margin - top: 3.6em;
                    }
.header-two-left ul li {
                            display: inline-block;
                        color: #33414e;
                        font-size: 1em;
                        margin-right: 1.5em;
                    }
.header-two-left ul li a{
                            color:#33414e;
                        -webkit-transition:.5s all;
                        -moz-transition:.5s all;
                        transition:.5s all;
                    }
.header-two-left ul li a:hover{
                            color:#FF590F;
                    }
.header-two-left ul li i.glyphicon {
                            font - size: .9em;
                        margin-right: .8em;
                    }
.header-two .navbar-nav {
                            width: 33%;
                    }
.logo {
                            text - align: center;
                    }
.logo h1 {
                            font - size: 3em;
                        margin: 0.6em 0 0.5em;
                        font-weight: 900;
                    }
.logo h1 a {
                            display: inline-block;
                        color: #ff590f;
                        text-decoration: none;
                    }
.logo h1 a b {
                            color: #353F49;
                    }
span.tag {
                            display: block;
                        font-size: .3em;
                        color: #999;
                        font-family: 'Raleway', sans-serif;
                        letter-spacing: 1px;
                        margin-top: 6px;
                        font-weight: 400;
                    }
.header-two-right {
                            text - align: right;
                    }
.header-right {
                            float: right;
                        text-align: center;
                    }
.header-right a {
                            font - size: 0.9em;
                        color: #33414e;
                        font-weight: 500;
                    }
.header-right a:hover {
                            color: #FF590F;
                    }
.header-right.cart h4 {
                            display: inline-block;
                    }
.header-right span.glyphicon {
                            font - size: 1.5em;
                        color: #ff590f;
                        margin-right: 5px;
                    }
.cart-box p {
                            padding: 6px 8px;
                        background-color: #DCDCDC;
                        margin-top: 5px;
                        font-size: .9em;
                    }
.header-right.cart {
                            margin - right: 2em;
                        padding-right: 2em;
                        border-right: 1px solid #ECECEC;
                        margin-top: 2.3em;
                    }
.header-right.my-account {
                            margin: 3.2em 0;
                    }
                    /*--top-nav--*/
.top-nav nav.navbar {
                            margin: 0;
                        position: relative;
                    }
ul.dropdown-menu {
                            -moz - animation: fadeInDown .3s ease-in;
                        -webkit-animation: fadeInDown .3s ease-in;
                    /*-- w3layouts --*/
                        animation: fadeInDown .3s ease-in;
                    }
ul.nav.navbar-nav.top-nav-info {
                            float: none;
                        text-align: center;
                    }
ul.dropdown-menu.multi-column {
                            width: 100%;
                        padding: 2em;
                    }
.navbar-nav > li {
                            float: none;
                        display: inline-block;
                        position: inherit;
                    }
.navbar-expand-lg .navbar-nav > li > a {
                            color: #33414e;
                        font-size: 1.1em;
                        padding: 1.2em 1.3em;
                        font-weight: 500;
                        -webkit-transition:.5s all;
                        -moz-transition:.5s all;
                        transition:.5s all;
                    }
.navbar-expand-lg .navbar-nav > li > a:hover, .navbar-expand-lg .navbar-nav > li > a:focus,.navbar-expand-lg .navbar-nav > li > a.active{
                            color: #FF590F;
                        background: none;
                    }
.navbar-expand-lg .navbar-nav > .open > a, .navbar-expand-lg .navbar-nav > .open > a:hover, .navbar-expand-lg .navbar-nav > .open > a:focus {
                            color: #fff;
                        background: #FF590F;
                    }
b.caret {
                            margin - left: 0.5em;
                    }
.row h4 {
                            font - size: 1em;
                        color: #FF590F;
                        line-height: 1.8em;
                        text-transform: uppercase;
                        margin-bottom: 0.4em;
                        font-weight: 700;
                        font-family: 'Raleway', sans-serif;
                    }
.menu-grids.menulist1 ul {
                            display: inline-block;
                        width: 44%;
                    }
ul.multi-column-dropdown:nth-child(3) {
                            /*-- agileits --*/
                            border - right: 1px solid #D6D3D3;
                    }
.multi-column-dropdown li {
                            display: block;
                    }
.multi-column-dropdown li a {
                            display: block;
                        color: #999;
                        line-height: 2.5em;
                        font-size: 1em;
                        -webkit-transition:.5s all;
                        -moz-transition:.5s all;
                        transition:.5s all;
                        -o-transition:.5s all;
                        -ms-transition:.5s all;
                    }
.multi-column-dropdown li a:hover {
                            color: #33414E;
                        font-weight: 500;
                    }
.multi-column-dropdown li h6 a {
                            font - size: 1.5em;
                        color: #000;
                        font-weight: 700;
                    }
.multi-column-dropdown li h6 a:hover{
                            font - weight: 700;
                        text-decoration:underline;
                    }
.menu-grids img {
                            width: 100%;
                    }
.new-add {
                            background:url(../images/img2.jpg)no-repeat center;
                        background-size: cover;
                        min-height: 210px;
                    }
.new-add2 h6 {
                            font - family: 'Fascinate', cursive;
                        font-size: 2.1em;
                        color: #000;
                    }
.new-add h5 {
                            font - family: 'Fascinate', cursive;
                        font-size: 3em;
                        padding: 1em 1em;
                        color: #000;
                        line-height: 1.4em;
                    }
                    /*-- w3layouts --*/
.menu-grids a {
                            display: block;
                        text-decoration:none;
                    }
                    /*--//top-nav--*/
                    /*--search--*/
.cd-main-header {
                            /* Force Hardware Acceleration in WebKit */
                            -webkit - transform: translateZ(0);
                        -moz-transform: translateZ(0);
                        -ms-transform: translateZ(0);
                        -o-transform: translateZ(0);
                        transform: translateZ(0);
                        will-change: transform;
                      }
.cd-main-header {
                            -webkit - transition: -webkit-transform 0.3s;
                        -moz-transition: -moz-transform 0.3s;
                        transition: transform 0.3s;
                      }
.cd-main-content.nav-is-visible, .cd-main-header.nav-is-visible {
                            -webkit - transform: translateX(-260px);
                        -moz-transform: translateX(-260px);
                        -ms-transform: translateX(-260px);
                        -o-transform: translateX(-260px);
                        transform: translateX(-260px);
                    }
.nav-on-left .cd-main-content.nav-is-visible, .nav-on-left .cd-main-header.nav-is-visible {
                            -webkit - transform: translateX(260px);
                        -moz-transform: translateX(260px);
                        -ms-transform: translateX(260px);
                        -o-transform: translateX(260px);
                        transform: translateX(260px);
                    }
.cd-header-buttons {
                            position: absolute;
                        display: inline-block;
                        top: -47px;
                        right: 15%;
                    }
.cd-header-buttons li {
                            display: inline-block;
                    }
.cd-search-trigger, .cd-nav-trigger {
                            position: relative;
                        display: block;
                        width: 44px;
                        height: 44px;
                        overflow: hidden;
                    /*-- agileits --*/
                        white-space: nowrap;
                        color: transparent;
                        z-index: 3;
                    }
                    
.cd-search-trigger::before, .cd-search-trigger::after {
                            /* search icon */
                            content: '';
                        position: absolute;
                        -webkit-transition: opacity 0.3s;
                        -moz-transition: opacity 0.3s;
                        transition: opacity 0.3s;
                        /* Force Hardware Acceleration in WebKit */
                        -webkit-transform: translateZ(0);
                        -moz-transform: translateZ(0);
                        -ms-transform: translateZ(0);
                        -o-transform: translateZ(0);
                        transform: translateZ(0);
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                    }
.cd-search-trigger::before {
                            /* lens */
                            top: 11px;
                        left: 11px;
                        width: 18px;
                        height: 18px;
                        -webkit-border-radius: 50%;
                        -moz-border-radius: 50%;
                        border-radius: 50%;
                        border: 3px solid #2e3233;
                    }
.cd-search-trigger::after {
                            /* handle */
                            height: 3px;
                        width: 8px;
                        background: #2e3233;
                        bottom: 14px;
                        right: 11px;
                        -webkit-transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
.cd-search-trigger span {
                            /* container for the X icon */
                            position: absolute;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        left: 0;
                    }
.cd-search-trigger span::before, .cd-search-trigger span::after {
                            /* close icon */
                            content: '';
                        position: absolute;
                        display: inline-block;
                        height: 3px;
                        width: 22px;
                        top: 50%;
                        margin-top: -2px;
                        left: 50%;
                        margin-left: -11px;
                        background: #2e3233;
                        opacity: 0;
                        /* Force Hardware Acceleration in WebKit */
                        -webkit-transform: translateZ(0);
                        -moz-transform: translateZ(0);
                        -ms-transform: translateZ(0);
                        -o-transform: translateZ(0);
                        transform: translateZ(0);
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
                        -moz-transition: opacity 0.3s, -moz-transform 0.3s;
                        transition: opacity 0.3s, transform 0.3s;
                    }
.cd-search-trigger span::before {
                            -webkit - transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
.cd-search-trigger span::after {
                            -webkit - transform: rotate(-45deg);
                        -moz-transform: rotate(-45deg);
                        -ms-transform: rotate(-45deg);
                        -o-transform: rotate(-45deg);
                        transform: rotate(-45deg);
                    }
.cd-search-trigger.search-is-visible::before, .cd-search-trigger.search-is-visible::after {
                            /* hide search icon */
                            -moz - opacity: 0;
                        opacity: 0;
                    }
.cd-search-trigger.search-is-visible span::before, .cd-search-trigger.search-is-visible span::after {
                            /* show close icon */
                            -moz - opacity: 1;
                        opacity: 1;
                    }
.cd-search-trigger.search-is-visible span::before {
                            -webkit - transform: rotate(135deg);
                        -moz-transform: rotate(135deg);
                        -ms-transform: rotate(135deg);
                        -o-transform: rotate(135deg);
                        transform: rotate(135deg);
                    }
.cd-search-trigger.search-is-visible span::after {
                            -webkit - transform: rotate(45deg);
                        -moz-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        -o-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
.cd-search {
                            position: absolute;
                        width: 100%;
                        top: 100%;
                        left: 0;
                        z-index: 3;
                        opacity: 0;
                        visibility: hidden;
                        -webkit-transition: opacity .3s 0s, visibility 0s .3s;
                        -moz-transition: opacity .3s 0s, visibility 0s .3s;
                        transition: opacity .3s 0s, visibility 0s .3s;
                    }
.cd-search input {
                            border - radius: 0;
                        border: none;
                        background: #00a6d6;
                        width: 100%;
                        padding: 0 5%;
                        -webkit-box-shadow: inset 0 1px 0 #e2e3df, 0 3px 6px rgba(0, 0, 0, 0.05);
                        -moz-box-shadow: inset 0 1px 0 #e2e3df, 0 3px 6px rgba(0, 0, 0, 0.05);
                        box-shadow: inset 0 1px 0 #e2e3df, 0 3px 6px rgba(0, 0, 0, 0.05);
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        -ms-appearance: none;
                        -o-appearance: none;
                        appearance: none;
                        font-size: 2em;
                        padding: 1em 2em;
                        color: #fff;
                    }
.cd-search input::-webkit-input-placeholder {
                            color: #fff !important;
                    }
.cd-search input::-moz-placeholder {
                            color: #fff !important;
                    }
.cd-search input:-moz-placeholder {
                            color: #fff !important;
                    }
.cd-search input:-ms-input-placeholder {
                            color: #fff !important;
                    }
.cd-search input:focus {
                            outline: none;
                    }
.cd-search.is-visible {
                            -moz - opacity: 1;
                        opacity: 1;
                        visibility: visible;
                        -webkit-transition: opacity .3s 0s, visibility 0s 0s;
                        -moz-transition: opacity .3s 0s, visibility 0s 0s;
                        transition: opacity .3s 0s, visibility 0s 0s;
                    }
                    /*--//search--*/
                    /*--//header--*/
                    /*--banner--*/
.banner {
                            background: #33414e;
                        padding: 9em 0;
                        background:url(../images/1.jpg)no-repeat 0px 0px;
                        background-size:cover;
                    }
.banner-right{
                            background:url(../images/img3.jpg)no-repeat 0px 0px;
                        background-size:cover;
                        min-height:300px;
                        padding-top: 2em;
                    }
.banner-left {
                            text - align: center;
                    }
.banner h2 {
                            color: #fff;
                        font-size: 3em;
                    }
.banner-text h3 {
                            text - align: center;
                        margin: 1.3em auto;
                        font-size: 1.5em;
                        color: #fff;
                        background: #FF590F;
                        display: inline-block;
                        padding: .5em 1em;
                    }
.banner-left h4 {
                            font - size: 2em;
                        color: #fff;
                        margin-bottom: 1em;
                    }
.banner-right ul li {
                            position:relative;
                    }
.banner-right ul li h4 {
                            position: absolute;
                        font-size: 5em;
                        color: #000;
                        bottom: 21%;
                        left: 27%;
                    }
                    /*--countdown--*/
ul#example {
                            list - style: none;
                        margin: 0;
                        display: block;
                        text-align: center;
                    }
ul#example li {
                            display: inline-block;
                        border: 3px solid #6D6C6C;
                        padding: 1.1em 1.5em;
                        width: 24%;
                    }
ul#example li:nth-child(2) {
                            margin: 0 1.5em;
                    }
ul#example li span {
                            font - size: 2em;
                        color: #fff;
                        line-height: 0.6em;
                    }
                    
ul#example li p {
                            color: #fff;
                        font-size: 0.9em;
                        margin-top: 0.5em;
                    }`

export default Header2
