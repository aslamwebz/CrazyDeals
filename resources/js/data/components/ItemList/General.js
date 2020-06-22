import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../Sidebar/Sidebar'
import Axios from 'axios'
import Product from '../Product/Product'
import styled from 'styled-components'
import uuid from 'react-uuid'

const General = () => {

    const [state, setstate] = useState([])
    const [cat, setcat] = useState({
        fashion: true,
        elec: true,
        mobile: true,
    })

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        Axios.get('api/allitems')
            .then(res => setstate(res.data.data))
    }
    const paginateHandle = async (e, operation) => {
    }

    const pagination = () => {

    }

    const selectHandle = (e) => {
        // let checked = !fashion
        // setfashion(checked)
        // getDataByCategory(checked, elec, mobile)
        let c = { ...cat, [e.target.name]: !e.target.name }
        setcat(c)
        if (cat.fashion === false && cat.mobile === false && cat.elec === false) {
            let c = { ...cat, elec: true }
            setcat(c)
        } else {
            getDataByCategory()
        }

    }

    const getDataByCategory = () => {
        // console.log(f, e, m)


        Axios.post('/api/searchByCatogory', {
            cat
        })
            .then(res => {
                setstate(res.data.data)
                // console.log(res.data)
            }
            )
    }
    return (
        <Div>
            <Header />
            <div id="wrapper">
                <div className="row">
                    <div className="col-md-2">

                        <ul>
                            <li>
                                <input type="checkbox" name="fashion" onChange={(e) => selectHandle(e)} checked={cat.fashion} /> Fashion
                            </li>
                            <li>
                                <input type="checkbox" name="elec" onChange={(e) => selectHandle(e)} checked={cat.elec} /> Electronics
                            </li>
                            <li>
                                <input type="checkbox" name="mobile" onChange={(e) => selectHandle(e)} checked={cat.mobile} /> Mobile
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="">
                                    Showing 1–9 of 48 results
                             </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cardgroup">
                                <div className="card-deck">
                                    {state.map(product => {
                                        return <Product key={uuid()} product={product} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="card-footer py-4">
                <nav aria-label="...">
                    <ul className="pagination justify-content-end mb-0">
                        <li className="page-item">
                            <a className="page-link" type="button" onClick={e => paginateHandle(e, "prev")} tabIndex="-1">
                                <i className="fas fa-angle-left"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {pagination()}
                        <li className="page-item">
                            <a className="page-link" type="button" onClick={e => paginateHandle(e, "next")}>
                                <i className="fas fa-angle-right"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Div >
    )
}

const Div = styled.div`
.cardgroup{
    margin:20px;
}
`

export default General
