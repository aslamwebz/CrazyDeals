import React, { useEffect, useState, useContext } from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import Header from './Header'
import { useHistory } from "react-router-dom";
import * as firebase from 'firebase'



import Electronics from './components/Electronics'
import Content from './components/Content'
import Fashion from './components/Fashion'
import Mobile from './components/Mobile'
import Profile from './components/Profile'
import ElectronicsForm from './components/Forms/ElectronicsForm'
import FashionForm from './components/Forms/FashionForm'
import MobileForm from './components/Forms/MobileForm'

import Featured from './components/Featured'
import styled from 'styled-components'
import { AuthContext } from './Auth/Auth';


const Div = styled.div`
.main{
    margin:20px;
}

.header-body{
    margin-top:20px;
}

.add{
    margin-top:15px;
    padding-right:40px;
}
`


const admin = (props) => {

    const history = useHistory()
    // console.log(props)
    const { currentUser } = useContext(AuthContext);
    // console.log(currentUser)
    const [data, setData] = useState("electronics")
    const { operation, id } = props.match.params

    const children = () => {
        if (props.match.params.operation === "viewElectronics") {
            return <ElectronicsForm operation={operation} id={id} />
        }

        if (props.match.params.operation === "editElectronics") {
            return <ElectronicsForm operation={operation} id={id} />
        }

        if (props.location.pathname === "/admin/electronics/createElectronics") {
            return <ElectronicsForm operation={"createElectronics"} id={1} />
        }

        if (props.location.pathname === "/admin/fashion/createFashion") {
            return <FashionForm operation={"createFashion"} id={1} />
        }

        if (props.match.params.operation === "viewFashion") {
            return <FashionForm operation={operation} id={id} />
        }

        if (props.match.params.operation === "editFashion") {
            return <FashionForm operation={operation} id={id} />
        }

        if (props.location.pathname === "/admin/mobile/createMobile") {
            return <MobileForm operation={"createMobile"} id={1} />
        }
        if (props.match.params.operation === "viewMobile") {
            return <MobileForm operation={operation} id={id} />
        }

        if (props.match.params.operation === "editMobile") {
            return <MobileForm operation={operation} id={id} />
        }

        if (props.location.pathname === "/admin") {
            return <Content />
        }

        if (props.location.pathname === "/admin/electronics") {
            return <Electronics />
        }

        if (props.location.pathname === "/admin/fashion") {
            return <Fashion />
        }

        if (props.location.pathname === "/admin/mobile") {
            return <Mobile />
        }

        if (props.location.pathname === "/admin/profile") {
            return <Profile />
        }

        if (props.location.pathname === "/admin/featured") {
            return <Featured />
        }

    }

    const createNewHandler = () => {
        let type = ""
        let url = ""
        if (props.location.pathname === "/admin/electronics") {
            type = "createElectronics"
        }
        if (props.location.pathname === "/admin/fashion") {
            type = "createFashion"
        }

        if (props.location.pathname === "/admin/mobile") {
            type = "createMobile"
        }

        url = props.location.pathname + "/" + type
        history.push(url)
    }

    const renderCreateNew = () => {
        if (1) {
            return <div className="col-lg-6 col-5 text-right add">
                <button className="btn btn-sm btn-primary" onClick={() => createNewHandler()}>Create New</button>
                <a href="#" className="btn btn-sm btn-neutral">Filters</a>
            </div>
        }
    }

    return (
        <div>
            <Sidebar />
            <div className="main-content" id="panel">
                <Header />
                <Div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-7">
                                <h6 className="h2 text-white mb-0">{data.charAt(0).toUpperCase()}</h6>
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                                        <li className="breadcrumb-item"><a href="#">Section</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{data === "" ? "Dashboard" : data.toUpperCase()}</li>
                                    </ol>
                                </nav>
                            </div>
                            {renderCreateNew()}
                        </div>
                    </div>
                    <div className="main">
                        {children()}
                    </div>
                </Div>

            </div>
        </div >
    )
}



export default admin
