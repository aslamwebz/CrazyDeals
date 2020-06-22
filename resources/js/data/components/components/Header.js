import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory()
    const [search, setsearch] = useState([])

    return (
        <div>
            <SlimNav className="SlimNavbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Wishlist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Account</a>
                        </li>
                    </ul>
                </div>
            </SlimNav>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <a className="navbar-brand" href="/">Crazy<span>Deal</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <div className="form-group row">

                            <form className="form-inline" onSubmit={(e) => {
                                e.preventDefault
                                history.push('/search/' + search)
                            }}>
                                <input className="form-control form-control-sm ml-3" type="text" placeholder="Search"
                                    aria-label="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
                                <button className="btn btn-large btn-info search">
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </ul>

                </div>


            </Nav>
            <NavSlim2 className="navbar navbar-expand-lg ">

                <ul className="navbar-nav m-auto ">
                    <li className="nav-item">
                        <div className="dropdown" onMouseOver={() => {
                            // $('.dropdown-toggle').dropdown('toggle')
                        }}>
                            <a className="nav-link dropdown-toggle " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Electronics
  </a>
                            <div className="dropdown-menu  " aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/electronics">Computers</a>
                                <a className="dropdown-item" href="#">Laptops</a>
                                <a className="dropdown-item" href="#">Accessories</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown" onMouseOver={() => {
                            // $('.dropdown-toggle').dropdown('toggle')
                        }}>
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Fashion
  </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Men</a>
                                <a className="dropdown-item" href="#">Women</a>
                                <a className="dropdown-item" href="#">Boys</a>
                                <a className="dropdown-item" href="#">Girls</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown" onMouseOver={() => {
                            // $('.dropdown-toggle').dropdown('toggle')
                        }}>
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Mobile
  </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Apple</a>
                                <a className="dropdown-item" href="#">Android</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown" onMouseOver={() => {
                            // $('.dropdown-toggle').dropdown('toggle')
                        }}>
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Home and Garden
  </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Tools and Garden</a>
                                <a className="dropdown-item" href="#">Kitchen and Dining</a>
                                <a className="dropdown-item" href="#">Home decor</a>
                            </div>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <div className="dropdown" onMouseOver={() => {
                            // $('.dropdown-toggle').dropdown('toggle')
                        }}>
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Dropdown button
  </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                    <div className="col-md-4">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                    <div className="col-md-4">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}

                </ul>


            </NavSlim2>
        </div>
    )
}

const Nav = styled.nav`
padding:5px 20px !important;
border-bottom:0.5px solid rgba(0,0,0, 0.1);
.navbar{
  box-shadow: 0 1px 3px #ddd;
  background: #fff;
}
li a {
  font-weight:500;
  color: #767f88;
  font-size:14px;	
  text-decoration:none;
  text-transform:uppercase;
  letter-spacing:1px;
}

li a:hover{
}

.navbar-brand{
  font-size:35px;
  font-style:bold;
}

.navbar-brand span{
  color: #e6400c;
}

input[type=text] {
  border: 1px solid #4dd0e1;
  width:695px;
  font-size:25px;
  margin:7px;
}

 .search{
    font-size:20px;
}


`;

const SlimNav = styled.nav`
padding:2px;
border-bottom:0.5px solid rgba(0,0,0, 0.1);


a{
  font-size:15px;
  color:black !important;
  
} 
          
a.nav-link{
}

`


const NavSlim2 = styled.nav`

font-size:15px;
font-weight:400;
padding:5px;
width:100%;
text-align:center !important;
.dropdown-menu{
    text-align:center !important;

   right: auto;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  width:10vw;
}



`

export default Header
