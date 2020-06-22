import React, { useState, useEffect } from 'react'

import styled from 'styled-components'


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

const Main = ({ data, setData }) => {

    const [id, setId] = useState([])

    useEffect(() => {
    }, [data])


    const setRender = () => {

    }

    return (
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
                    <div className="col-lg-6 col-5 text-right add">
                        <a href="#" className="btn btn-sm btn-primary" onClick={() => setData("createElectronics")}>Create New</a>
                        <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                    </div>
                </div>
            </div>
            <div className="main">
            </div>
        </Div>
    )
}

export default Main
