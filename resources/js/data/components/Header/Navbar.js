import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  padding:20px !important;
  border-bottom:0.5px solid rgba(0,0,0, 0.3);
  li a {
    font-weight:700;
    color:#333;
    font-size:14px;	
    text-decoration:none;
    text-transform:uppercase;
    letter-spacing:1px;
  }

  .navbar-brand{
    font-size:25px;
    font-style:bold;
  }

  .navbar-brand span{
    color: #e6400c;
  }
`;

const SlimNav = styled.nav`
  padding:-1px;
`

export const Navbar = () => {
  return (
    <div>
      <SlimNav className="SlimNavbar navbar-expand-lg navbar-dark bg-dark">
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
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Crazy<span>Deal</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/itemlist">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Clothing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mobile Phones</a>
            </li>
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </Nav>
    </div>

  )
}
