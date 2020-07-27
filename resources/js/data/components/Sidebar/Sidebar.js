import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const Div = styled.div`
  #sidebar {
    background: #fff;
    padding: 13px 0 0 45px;
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

#sidebar .filters {
  padding: 20px;
}

#sidebar .filters input {
  width:100px;
}
.checklist ul {
  padding:0;
}

.checklist ul li  {
  font-size: 14px;
  font-weight: 400;
  list-style: none;
  padding: 7px 0 7px 7px;
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
.categories .filters li {
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

.col-md-6{
  margin:0;
  padding:0;
}

`;

const Sidebar = ({ filterProducts }) => {
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const history = useHistory()

  const handleClick = (e, path) => {
    e.preventDefault()
    history.push("/items/" + path)
  }

  const handleClear = () => {
    setStart("")
    setEnd("")
    filterProducts("", "")
  }

  const handleChange = (e, op) => {
    if (op === "start") {
      setStart(e.target.value)
    }
    if (op === "end") {
      setEnd(e.target.value)
    }
  }


  const handleFilter = () => {
    if (start !== "" || end !== "") {
      filterProducts(start, end)
    }
  }

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
            <li>
              <a onClick={(e) => handleClick(e, "electronics")} type="button">Electronics</a>
            </li>
            <li>
              <a onClick={(e) => handleClick(e, "fashion")} type="button">Fashion</a>
            </li>
            <li>
              <a onClick={(e) => handleClick(e, "mobile")} type="button">Mobile</a>
            </li>
          </ul>
        </div>

        <h3>PRICE RANGE</h3>
        <div className="checklist filters">
          <div className="row form-group">
            <div className="col-md-6">
              <input className="form-control" name="" id="" placeholder="From" value={start} onChange={(e) => handleChange(e, "start")} />
            </div>
            <div className="col-md-6">
              <input className="form-control" name="" id="" placeholder="To" value={end} onChange={(e) => handleChange(e, "end")} />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <button className="btn btn-info" onClick={() => handleFilter()}>Apply Filter</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-info" onClick={() => handleClear()}>Clear Filters</button>
            </div>
          </div>
        </div >




      </div >

    </Div >
  )
}

export default Sidebar
