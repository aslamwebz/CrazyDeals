import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { itemCount } from '../../actions/cartActions'
import { connect } from 'react-redux';

const Header = (props) => {
    useEffect(() => {
        props.itemCount()
    }, [])

    useEffect(() => {
    }, [props.count])

    const history = useHistory()
    const [search, setsearch] = useState("")
    const [category, setcategory] = useState("all")


    const handleCategoryChange = (e) => {
        const cat = e.target.value;
        setcategory(cat)
    }
    return (
        <div>
            <SlimNav className="SlimNavbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Wishlist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart<i className="fas fa-shopping-cart"></i> {props.count} </a>
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

                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <div className="dropdown" onMouseOver={() => {
                                // $('.dropdown-toggle').dropdown('toggle')
                            }}>
                                <a className="nav-link dropdown-toggle " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    Electronics
  </a>
                                <div className="dropdown-menu  " aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/items/electronics">Computers</a>
                                    <a className="dropdown-item" href="/items/electronics">Laptops</a>
                                    <a className="dropdown-item" href="/items/electronics">Accessories</a>
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
                                    <a className="dropdown-item" href="/items/fashion">Men</a>
                                    <a className="dropdown-item" href="/items/fashion">Women</a>
                                    <a className="dropdown-item" href="/items/fashion">Boys</a>
                                    <a className="dropdown-item" href="/items/fashion">Girls</a>
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
                                    <a className="dropdown-item" href="/items/mobile">Apple</a>
                                    <a className="dropdown-item" href="/items/mobile">Android</a>
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
                    <ul className="navbar-nav ml-auto">
                        <div className="form-group row">

                            <form className="form-inline" onSubmit={(e) => {
                                if (search == "") {
                                    history.push('/items')
                                } else {
                                    history.push('/search/' + search + "/" + category)
                                }
                            }}>
                                <input className="form-control form-control-sm ml-3" type="text" placeholder="Search"
                                    aria-label="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
                                <div className="form-group">
                                    <label htmlFor=""></label>
                                    <select className="form-control" name="" id="" onChange={(e) =>
                                        handleCategoryChange(e)
                                    } >
                                        <option value="all">All</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="mobile">Mobile</option>
                                        <option value="fashion">Fashion</option>
                                    </select>
                                </div>
                                <button className="btn btn-large btn-info search">
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </ul>

                </div>


            </Nav>
            <NavSlim2 className="navbar navbar-expand-lg ">



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
  width:395px;
  font-size:18px;
  margin:7px;
}

 .search{
    font-size:15px;
    margin-left:4px;
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

const mapStateToProps = (state) => ({
    count: state.cart.count
})

export default connect(mapStateToProps, { itemCount })(Header)
