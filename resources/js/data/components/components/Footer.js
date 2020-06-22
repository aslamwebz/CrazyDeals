import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Div>
            <div className="footer">
                <div className="footer_agile_inner_info_w3l row">
                    <div className="col-md-3 footer-left">
                        <h2><a href="index.html"><span>E</span>lite Shoppy </a></h2>
                        <p>Lorem ipsum quia dolor
                            sit amet, consectetur, adipisci velit, sed quia non
					numquam eius modi tempora.</p>
                        <ul className="social-nav model-3d-0 footer-social w3_agile_social two">
                            <li><a href="/" className="facebook">
                                <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                            </a></li>
                            <li><a href="/" className="twitter">
                                <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                            </a></li>
                            <li><a href="/" className="instagram">
                                <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                            </a></li>
                            <li><a href="/" className="pinterest">
                                <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                            </a></li>
                        </ul>
                    </div>
                    <div className="col-md-9 footer-right">
                        <div className="sign-grds row">
                            <div className="col-md-4 sign-gd">
                                <h4>Our <span>Information</span> </h4>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="mens.html">Men's Wear</a></li>
                                    <li><a href="womens.html">Women's wear</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="typography.html">Short Codes</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>

                            <div className="col-md-5 sign-gd-two">
                                <h4>Store <span>Information</span></h4>
                                <div className="w3-address">
                                    <div className="w3-address-grid">
                                        <div className="w3-address-left">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </div>
                                        <div className="w3-address-right">
                                            <h6>Phone Number</h6>
                                            <p>+1 234 567 8901</p>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="w3-address-grid">
                                        <div className="w3-address-left">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </div>
                                        <div className="w3-address-right">
                                            <h6>Email Address</h6>
                                            <p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="w3-address-grid">
                                        <div className="w3-address-left">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div className="w3-address-right">
                                            <h6>Location</h6>
                                            <p>Broome St, NY 10002,California, USA.

									</p>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 sign-gd flickr-post">
                                <h4>Flickr <span>Posts</span></h4>
                                <ul>
                                    <li><a href="/"><img src="images/t1.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t2.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t3.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t4.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t1.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t2.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t3.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t2.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                    <li><a href="/"><img src="images/t4.jpg" alt=" " className="img-fluid" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="agile_newsletter_footer row">
                        <div className="col-sm-6 newsleft">
                            <h3>SIGN UP FOR NEWSLETTER !</h3>
                        </div>
                        <div className="col-sm-6 ">
                            <form className="form-inline">
                                <i className="fas fa-search" aria-hidden="true"></i>
                                <input className="form-control form-control mr-1" type="text" placeholder="Search"
                                    aria-label="Search" />
                                <input type="submit" value="Submit" className="form-control btn btn-info" />

                            </form>
                        </div>

                        <div className="clearfix"></div>
                    </div>
                    <p className="copy-right">&copy 2017 Elite shoppy. All rights reserved | Design by <a
                        href="http://w3layouts.com/">W3layouts</a></p>
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
/*-- footer --*/
.footer{
    padding: 4em 0;
    background: #000;
}
.footer_agile_inner_info_w3l {
    width: 90%;
    margin: 0 auto;
}
ul.social-nav.model-3d-0.footer-social.w3_agile_social.two {
    float: none;
}
.footer-left p{
    color: #737070;
    line-height: 2em;
    font-size: 14px;
    margin-top: 22px;
}
.newsright input[type="email"] {
    outline: none;
    width: 100%;
    padding: 10px 14px;
    color: #848484;
    font-size: 14px;
    border: 1px solid #3a3939;
    width: 74%;
    letter-spacing: 3px;
    background: #1f1f1f;
}
.newsright input[type="submit"]{
    border: none;
    padding: 10px 20px 11px;
    font-size: 15px;
    outline: none;
    text-transform: uppercase;
    margin: 0 0 0 -4px;
    font-weight: 700;
    letter-spacing: 1px;
	background: #2fdab8;
	color:#fff;
}
.newsright input[type="submit"]:hover{
    background: #fff;
    color: #000;
}
.newsleft h3 {
    font-size: 24px;
    margin-top: 15px;
    color: #fff;
    letter-spacing: 3px;
    font-weight: 700;
}
.sign-gd h4,.sign-gd-two h4 {
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 25px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
}
.sign-gd h4 span,.sign-gd-two h4 span{
  font-weight:300;
}
.sign-gd ul li,.sign-gd-two ul li {
    color: #848484;
    line-height: 2em;
    font-size: 14px;
	list-style-type:none;
}
.sign-gd ul li a,.sign-gd-two ul li a{
    color: #737070;
    letter-spacing: 1px;
}
.sign-gd ul li a:hover,.sign-gd-two ul li a:hover{
    color: #2fdab8;	
}
.w3ls-post-grid:nth-child(2){
	margin:1em 0;
}
.w3-address-grid{
    background: #080808;
    padding: 1em;
}
.w3-address-left{
	float:left;
	width:10%;
}
.w3-address-left i.fa.fa-phone,.w3-address-left i.fa.fa-envelope,.w3-address-left i.fa.fa-map-marker{
    color: #FFFFFF;
    font-size: 1em;
}
.w3-address-right{
	float: right;
    width: 87%;
}
.w3-address-right h6{
    color: #FFFFFF;
    font-size: 0.9em;
    margin: 0;
    font-weight: 600;
    letter-spacing: 1px;
}
.w3-address-right p{
    margin: 1em 0 0 0;
    font-size: .9em;
    color: #565656;
}
.w3-address-right p a{
    color: #2fdab8;
    text-decoration: none;
}
.w3-address-right p a:hover{
	color:#b5b5b5;
}
.w3-address-right p span{
	display:block;
	margin:.5em 0;
}
.w3-address-grid:nth-child(2){
    margin: 0.2em 0;
}
.flickr-post ul li{
	display:inline-block;
	margin:5px 5px;
}
.flickr-post ul li {
    display: inline-block;
    margin: 1% 1%;
    width: 28%;
}
p.copy-right {
    color: #848484;
    text-align: center;
    margin-top: 62px;
    font-size: 14px;
}
p.copy-right a{
    color: #ffffff;
	text-decoration:none;
}
p.copy-right a:hover{
color: #2fdab8;	
}
.footer-left h2 a {
    font-size: 0.9em;
    color: #fff;
    font-weight: 300;
    letter-spacing: 2px;
}
.footer-left h2 a span {
    padding: 0 10px;
    background: #2fdab8;
    font-weight: 600;
}
/*-- //footer --*/
.multi-gd-img.multi-gd-text h4 {
    position: absolute;
    top: 50%;
    left: 30%;
    font-size: 2em;
    color: #fff;
    font-weight: 300;
    letter-spacing: 10px;
}
.multi-gd-img.multi-gd-text h4  span{
    font-weight:700;
	color:#2fdab8;
}
.multi-gd-img.multi-gd-text {
    padding: 0;
}
.styled-input.agile-styled-input-top {
    margin-top: 0;
} 
.address-grid {
    padding: 1em 0em 0 0em;
}
.contact-form {
    background: #181919;
    padding: 5em 3em;
}
.contact input[type="text"], .contact input[type="email"], .contact textarea {
    font-size: 15px;
    letter-spacing: 1px;
    color: #fff;
    padding: 0.5em 1em;
    border: 0;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
    background: none;
    -webkit-appearance: none;
    outline: none;
}
.contact textarea { 
	min-height: 8em;
    resize: none;
} 
`
export default Footer
