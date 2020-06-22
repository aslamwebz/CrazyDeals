import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  #sidebar {
    background: #fff;
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


#sidebar .checklist {
  padding: 0;
}

.checklist ul li  {
  font-size: 14px;
  font-weight: 400;
  list-style: none;
  padding: 7px 0 7px 23px;
}

.checklist li span {
  float: left;
  width: 11px;
  height: 11px;
  margin-left: -23px;
  margin-top: 4px;
  position: relative;
}

.sizes li span,
.categories .sizes li {
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
}


.checklist .checked span {
  border-color: #8d939f;
}

#sidebar img {
  margin-top: 6px;
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
            <li><span>
              <input className="styled-checkbox" type="checkbox" />
            </span>Electronics</li>
            <li><span>
              <input className="styled-checkbox" type="checkbox" />
            </span>Mobiles</li>
            <li><span>
              <input className="styled-checkbox" type="checkbox" />
            </span>Cloths</li>
          </ul>
        </div>

        <h3>SIZES</h3>
        <div className="checklist sizes">
          <ul>
            <li><span><input className="styled-checkbox" type="checkbox" /></span>XSs</li>
            <li><span><input className="styled-checkbox" type="checkbox" /></span>Ss</li>
            <li><span><input className="styled-checkbox" type="checkbox" /></span>Ms</li >
          </ul >

          <ul>
            <li><span><input className="styled-checkbox" type="checkbox" /></span>Ls</li>
            <li><span><input className="styled-checkbox" type="checkbox" /></span>XLs</li >
            <li><span><input className="styled-checkbox" type="checkbox" /></span>XXLs</li >
          </ul >
        </div >

        <h3>PRICE RANGE</h3>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/price-range.png" alt="" />
      </div >

    </Div >
  )
}

export default Sidebar
