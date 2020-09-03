import React from 'react'
import styled from 'styled-components'

const MainSlider = () => {
    return (
        <Div>
            <div id="carouselMain" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselMain" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselMain" data-slide-to="1"></li>
                    <li data-target="#carouselMain" data-slide-to="2"></li>
                    <li data-target="#carouselMain" data-slide-to="3"></li>
                    <li data-target="#carouselMain" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="carousel-caption d-none d-md-block">
                                <h3>The Biggest <span>Sale</span></h3>
                                <p>Special for today</p>
                                <a className="hvr-outline-out button2" href="/items">Shop Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item item2">
                        <div className="container">
                            <div className="carousel-caption">
                                <h3>Summer <span>Collection</span></h3>
                                <p>New Arrivals On Sale</p>
                                <a className="hvr-outline-out button2" href="/items">Shop Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item item3">
                        <div className="container">
                            <div className="carousel-caption">
                                <h3>The Biggest <span>Sale</span></h3>
                                <p>Special for today</p>
                                <a className="hvr-outline-out button2" href="/items">Shop Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item item4">
                        <div className="container">
                            <div className="carousel-caption">
                                <h3>Summer <span>Collection</span></h3>
                                <p>New Arrivals On Sale</p>
                                <a className="hvr-outline-out button2" href="/items">Shop Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item item5">
                        <div className="container">
                            <div className="carousel-caption">
                                <h3>The Biggest <span>Sale</span></h3>
                                <p>Special for today</p>
                                <a className="hvr-outline-out button2" href="/items">Shop Now </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselMain" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselMain" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        </Div>
    )
}

const Div = styled.div`
#carouselMain {
    width:100% !important;
}
.carousel-item {
    position: inherit;
    min-height:500px!important;
    height:85vh;
    padding-top:10em;
    width:100% !important;
}

.carousel-caption{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:500px;
} 
.carousel .carousel-item{    
	background:-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner1.jpg) no-repeat;
	background:-moz-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner1.jpg) no-repeat;
	background:-ms-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner1.jpg) no-repeat; 
	background:linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner1.jpg) no-repeat;
	background-size:cover;	 
}
.carousel .carousel-item.item2{   
	background:-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner2.jpg) no-repeat;
	background:-moz-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner2.jpg) no-repeat;
	background:-ms-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner2.jpg) no-repeat; 
	background:linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner2.jpg) no-repeat;
	background-size:cover;	
}   
.carousel .carousel-item.item3{   
	background:-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner3.jpg) no-repeat;
	background:-moz-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner3.jpg) no-repeat;
	background:-ms-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner3.jpg) no-repeat; 
	background:linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner3.jpg) no-repeat;
	background-size:cover;	 
}   
.carousel .carousel-item.item4{        
	background:-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner4.jpg) no-repeat;
	background:-moz-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner4.jpg) no-repeat;
	background:-ms-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner4.jpg) no-repeat;
	background:linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner4.jpg) no-repeat;
	background-size:cover; 
}  
.carousel .carousel-item.item5{    
	background:-webkit-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner5.jpg) no-repeat;
	background:-moz-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner5.jpg) no-repeat;
	background:-ms-linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner5.jpg) no-repeat;
	background:linear-gradient(rgba(23, 22, 23, 0.2), rgba(23, 22, 23, 0.5)), url(../images/banner5.jpg) no-repeat;
	background-size:cover; 
}  

.carousel-caption h2, .carousel-caption h3 {
    font-size: 3em;
    font-weight: 300;
    letter-spacing: 14px;
    text-transform: uppercase;
} 
.carousel-caption h2 span, .carousel-caption h3 span{
    font-weight: 800;
    color: #2fdab8;
}
.carousel-caption p {
    letter-spacing: 12px;
    font-size: 1.2em;
    font-weight: 600;
    color: #ffb900;
    margin-top: 1em;
}
.carousel-caption a {
    color: #fff;
    letter-spacing: 3px;
    padding: 8px 20px;
    margin-top: 2em;
}
.codes{
	padding:5em 0; 
	background:#fff; 
}
.codes.agileitsbg2 {
    background: #E74C3C;
	background-image:-webkit-linear-gradient(#ff9d2f, #ff6126);
	background-image:-moz-linear-gradient(#ff9d2f, #ff6126);
	background-image:-ms-linear-gradient(#ff9d2f, #ff6126);
	background-image: linear-gradient(#ff9d2f, #ff6126); 
    padding-bottom: 10em;
}
.codes.agileitsbg3 {
    background: #3498DB;  
    padding-bottom: 10em;
}
.codes.agileitsbg4 {
    background: #2ECC71 ; 
    padding-bottom: 10em;
}
.carousel.slide.grid_3.grid_4 {  
    border-top: 10px solid #3ACFD5;
    border-bottom: 10px solid #3a4ed5;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
    -webkit-background-size: 10px 100%;
    -moz-background-size: 10px 100%;
    background-size: 10px 100%;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dÃ¢â‚¬Â¦0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dÃ¢â‚¬Â¦0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
    background-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
    background-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
    background-image: -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%), -o-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
    background-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%), linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);
}
.carousel-indicators {
    bottom: 8%;
}


`

export default MainSlider
