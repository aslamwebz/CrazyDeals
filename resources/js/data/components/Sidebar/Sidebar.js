import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  #sidebar {
    float: left;
    background: #fff;
    width: 275px;
    padding: 13px 0 0 45px;
    height: 1400px;
    border-right: 1px solid #eee;
}

#sidebar h3 {
    color: #262626;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    padding: 35px 0 10px 0;
    letter-spacing: 1px;
    clear: both;
}

`;

const Sidebar = () => {
  return (
    <Div >
      <div id="sidebar">
        <h3>CART</h3>
        <div id="cart">
          <span className="empty">No items in cart.</span>
        </div>

        <h3>CATEGORIES</h3>
        <div className="checklist categories">
          <ul>
            <li><a href="/itemlist"><span></span>New Arivals</a></li>
            <li><a href="/itemlist"><span></span>Accesories</a></li>
            <li><a href="/itemlist"><span></span>Bags</a></li>
            <li><a href="/itemlist"><span></span>Dressed</a></li>
            <li><a href="/itemlist"><span></span>Jackets</a></li>
            <li><a href="/itemlist"><span></span>jewelry</a></li>
            <li><a href="/itemlist"><span></span>Shoes</a></li>
            <li><a href="/itemlist"><span></span>Shirts</a></li>
            <li><a href="/itemlist"><span></span>Sweaters</a></li>
            <li><a href="/itemlist"><span></span>T-shirts</a></li>
          </ul>
        </div>

        <h3>COLORS</h3>
        <div className="checklist colors">
          <ul>
            <li><a href="/itemlist"><span></span>Beige</a></li>
            <li><a href="/itemlist"><span style={{ background: '#222' }}></span>Black</a></li>
            <li><a href="/itemlist"><span style={{ background: ' #6e8cd5' }}></span>Blue</a></li>
            <li><a href="/itemlist"><span style={{ background: '#f56060' }}></span>Brown</a></li>
            <li><a href="/itemlist"><span style={{ background: '#44c28d' }}></span>Green</a></li >
          </ul >

          <ul>
            <li><a href="/itemlist"><span style={{ background: '#999' }}></span>Grey</a></li>
            <li><a href="/itemlist"><span style={{ background: '#f79858' }}></span>Orange</a></li >
            <li><a href="/itemlist"><span style={{ background: '#b27ef8' }}></span>Purple</a></li >
            <li><a href="/itemlist"><span style={{ background: '#f56060' }}></span>Red</a></li >
            <li><a href="/itemlist"><span style={{ background: "#fff, border: 1px solid #e8e9eb,width:13px,height:13px," }}></span>White</a></li >
          </ul >
        </div >

        <h3>SIZES</h3>
        <div className="checklist sizes">
          <ul>
            <li><a href="/itemlist"><span></span>XS</a></li>
            <li><a href="/itemlist"><span></span>S</a></li>
            <li><a href="/itemlist"><span></span>M</a></li>
          </ul>

          <ul>
            <li><a href="/itemlist"><span></span>L</a></li>
            <li><a href="/itemlist"><span></span>XL</a></li>
            <li><a href="/itemlist"><span></span>XXL</a></li>
          </ul>
        </div>

        <h3>PRICE RANGE</h3>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/price-range.png" alt="" />
      </div >

    </Div>
  )
}

export default Sidebar
