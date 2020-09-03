import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../Sidebar/Sidebar'
import Product from '../Product/Product'
import Axios from 'axios'
import styled from 'styled-components'


const ItemList = () => {

    const [electronics, setElectronics] = useState([])
    const [pages, setPages] = useState([1])
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getElectronics()
    }, [])


    const getElectronics = () => {

        getPostData(1);
    }

    const getPostData = async (page) => {
        await Axios.get(`/api/electronics?page=${page}`)
            .then(res => {
                setElectronics(res.data.electronics.data)
                setPages(res.data.electronics)
                setPageCount(res.data.electronics.last_page)
                setCurrentPage(res.data.electronics.current_page)
            })
            .catch(res => {
                console.log(res)
            })

    }

    const handleClick = (e, itemid) => {
        e.preventDefault()
        Swal.fire({
            title: itemid,
            text: 'I will close in 2 seconds.',
            timer: 2000
        })
    }

    const pagination = () => {
        let pageUrls = [{ page: 1, url: `/api/electronics?page=${1}` }]
        for (let i = 2; i <= pageCount; i++) {
            pageUrls.push({ page: i, url: `/api/electronics?page=${i}` })
        }

        const pag = pageUrls.map(pg => {
            if (pg.page === currentPage) {
                return <li key={pg.page} className="page-item  active"><a className="page-link" type="button" onClick={() => getPostData(pg.page)}>{pg.page}</a></li>
            } else {
                return <li key={pg.page} className="page-item"><a className="page-link" type="button" onClick={() => getPostData(pg.page)} >{pg.page}</a></li>
            }
        })

        return pag
    }

    const paginateHandle = async (e, operation) => {
        e.preventDefault()
        let pageChange = 1
        if (operation === "prev") {
            pageChange = currentPage - 1
            if (currentPage != 1) {
                await Axios.get(`/api/electronics?page=${pageChange}`)
                    .then(res => {
                        setElectronics(res.data.electronics.data)
                        setPages(res.data.electronics)
                        setPageCount(res.data.electronics.last_page)
                        setCurrentPage(res.data.electronics.current_page)
                    })
                    .catch(res => {
                        console.log(res)
                    })
            }
        }

        if (operation === "next") {
            pageChange = currentPage + 1
            if (currentPage < pageCount) {
                await Axios.get(`/api/electronics?page=${pageChange}`)
                    .then(res => {
                        setElectronics(res.data.electronics.data)
                        setPages(res.data.electronics)
                        setPageCount(res.data.electronics.last_page)
                        setCurrentPage(res.data.electronics.current_page)
                    })
                    .catch(res => {
                        console.log(res)
                    })
            }
        }
    }

    return (
        <Div>
            <Header />
            <div id="wrapper">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="">
                                    <div id="grid-menu">
                                        View:
                    <ul>
                                            <li className="largeGrid"><a href="/itemlist"></a></li>
                                            <li className="smallGrid"><a className="active" href=""></a></li>
                                        </ul>
                                    </div>
                                    Showing 1–9 of 48 results
                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="cardgroup">
                                <div className="card-deck">
                                    {electronics.map(product => {
                                        return <Product key={product.id} product={product} />
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

export default ItemList
