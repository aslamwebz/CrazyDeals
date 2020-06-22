import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Sidebar = () => {


    const history = useHistory()
    const handleClick = (e, comp) => {
        e.preventDefault()
        history.push(comp)
    }

    return (
        <Nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                <div className="sidenav-header  align-items-center">
                    <a className="navbar-brand" href="/admin">Crazy<span>Deals</span> </a>
                </div>
                <div className="navbar-inner">
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a type="button" href="" className="nav-link" onClick={(e) => handleClick(e, "/admin/")}>
                                    <i className="ni ni-tv-2 text-primary"></i>
                                    <span className="nav-link-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a type="button" href="" className="nav-link" onClick={(e) => handleClick(e, "/admin/electronics")}>
                                    <i className="ni ni-planet text-info"></i>
                                    <span className="nav-link-text">Electronics</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a type="button" href="" className="nav-link" onClick={(e) => handleClick(e, "/admin/fashion")}>
                                    <i className="ni ni-planet text-info"></i>
                                    <span className="nav-link-text">Fashion</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a type="button" href="" className="nav-link" onClick={(e) => handleClick(e, "/admin/mobile")}>
                                    <i className="ni ni-planet text-info"></i>
                                    <span className="nav-link-text">Mobile</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" type="button" onClick={(e) => handleClick(e, "/admin/featured")}>
                                    <i className="ni ni-planet text-info"></i>
                                    <span className="nav-link-text">Featured</span>
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="examples/map.html">
                                    <i className="ni ni-pin-3 text-primary"></i>
                                    <span className="nav-link-text">Google</span>
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a type="button" href="" className="nav-link" onClick={(e) => handleClick(e, "/admin/profile")}>
                                    <i className="ni ni-single-02 text-yellow"></i>
                                    <span className="nav-link-text">Profile</span>
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="examples/tables.html">
                                    <i className="ni ni-bullet-list-67 text-default"></i>
                                    <span className="nav-link-text">Tables</span>
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    <i className="ni ni-key-25 text-info"></i>
                                    <span className="nav-link-text">Login</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">
                                    <i className="ni ni-circle-08 text-pink"></i>
                                    <span className="nav-link-text">Register</span>
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="examples/upgrade.html">
                                    <i className="ni ni-send text-dark"></i>
                                    <span className="nav-link-text">Upgrade</span>
                                </a>
                            </li> */}
                        </ul>
                        {/* <hr className="my-3" />
                        <h6 className="navbar-heading p-0 text-muted">
                            <span className="docs-normal">Documentation</span>
                        </h6>
                        <ul className="navbar-nav mb-md-3">
                            <li className="nav-item">
                                <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                                    <i className="ni ni-spaceship"></i>
                                    <span className="nav-link-text">Getting started</span>
                                </a>
                            </li>

                        </ul> */}
                    </div>
                </div>
            </div>
        </Nav >
    )
}

const Nav = styled.nav`
.navbar-brand{
    font-size:25px;
    font-style:bold;
  }
  
  .navbar-brand span{
    color: #e6400c;
  }
`

export default Sidebar
