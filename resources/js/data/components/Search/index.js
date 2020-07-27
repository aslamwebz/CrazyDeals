import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Product from '../Product/Product'
import uuid from 'react-uuid'
import Header from './Header'
import Sidebar from '../Sidebar/Sidebar'
import styled from 'styled-components'

const index = (props) => {
    const [search, setSearch] = useState([])
    const [state, setstate] = useState([])
    const [category, setcategory] = useState("all")
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setSearch(props.match.params.query);
        setcategory(props.match.params.category);
        getData(props.match.params.query, props.match.params.category)
        getProducts()
    }, [])

    useEffect(() => {
        getProducts()
    }, [state])

    const getData = (query, category) => {
        Axios.get(`/api/search/${query}/${category}`)
            .then(res => {
                setstate(res.data.data)
            }
            )
            .catch(err => console.log(err.data))
    }

    const paginateHandle = async (e, operation) => {
        e.preventDefault()
        let pageChange = 1
        if (operation === "prev") {
            pageChange = currentPage - 1

            if (currentPage != 1) {
                // await Axios.get(`/api/${category}?page=${pageChange}`)
                //     .then(res => {
                //         setState(res.data.electronics.data)
                //         setPages(res.data.electronics)
                //         setPageCount(res.data.electronics.last_page)
                //         setCurrentPage(res.data.electronics.current_page)
                //     })
                //     .categorych(res => {
                //         console.log(res)
                //     })
                if (category === "all") {
                    await Axios.get('api/allitems')
                        .then(res => setstate(res.data.data))
                } else if (category === "electronics") {
                    await Axios.get(`/api/${category}?page=${pageChange}`)
                        .then(res => {
                            setstate(res.data.electronics.data)
                            setPages(res.data.electronics)
                            setPageCount(res.data.electronics.last_page)
                            setCurrentPage(res.data.electronics.current_page)
                        })
                } else if (category === "mobile") {
                    await Axios.get(`/api/${category}?page=${pageChange}`)
                        .then(res => {
                            setstate(res.data.mobiles.data)
                            setPages(res.data.mobile)
                            setPageCount(res.data.mobile.last_page)
                            setCurrentPage(res.data.mobile.current_page)
                        })
                } else if (category === "fashion") {
                    await Axios.get(`/api/${category}?page=${pageChange}`)
                        .then(res => {
                            setstate(res.data.fashions.data)
                            setPages(res.data.fashions)
                            setPageCount(res.data.fashions.last_page)
                            setCurrentPage(res.data.fashions.current_page)
                        })
                }
            }
        }

        if (operation === "next") {
            pageChange = currentPage + 1
            if (currentPage < pageCount) {
                // await Axios.get(`/api/${category}?page=${pageChange}`)
                //     .then(res => {
                //         setState(res.data.electronics.data)
                //         setPages(res.data.electronics)
                //         setPageCount(res.data.electronics.last_page)
                //         setCurrentPage(res.data.electronics.current_page)
                //     })
                //     .categorych(res => {
                //         console.log(res)
                //     })
                if (category === "all") {
                    await Axios.get('api/allitems')
                        .then(res => setstate(res.data.data))
                } else if (category === "electronics") {
                    await Axios.get(`/api/${category}?page=${pageChange}`)
                        .then(res => {
                            setstate(res.data.electronics.data)
                            setPages(res.data.electronics)
                            setPageCount(res.data.electronics.last_page)
                            setCurrentPage(res.data.electronics.current_page)
                        })
                } else if (category === "mobile") {
                    await Axios.get(`/api/${category}?page=${pageChange}`)
                        .then(res => {
                            setstate(res.data.mobiles.data)
                            setPages(res.data.mobile)
                            setPageCount(res.data.mobile.last_page)
                            setCurrentPage(res.data.mobile.current_page)
                        })
                } else if (category === "fashion") {
                    await Axios.get(`/api/${category}?page=${pageChange}`)
                        .then(res => {
                            setstate(res.data.fashions.data)
                            setPages(res.data.fashions)
                            setPageCount(res.data.fashions.last_page)
                            setCurrentPage(res.data.fashions.current_page)
                        })
                }
            }
        }
    }

    const pagination = () => {
        let pageUrls = [{ page: 1, url: `/api/${category}?page=${1}` }]
        for (let i = 2; i <= pageCount; i++) {
            pageUrls.push({ page: i, url: `/api/${category}?page=${i}` })
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

    const getProducts = () => {
        let items = []

        if (state.length >= 1) {
            items = state.map(product => {
                return <Product key={uuid()} product={product} />
            })
        } else {
            items = "No products have found, please change the search queries"
        }

        setProducts(items)
    }

    const getPostData = async (page) => {
        // await Axios.get(`/api/electronics?page=${page}`)
        //     .then(res => {
        //         setElectronics(res.data.electronics.data)
        //         setPages(res.data.electronics)
        //         setPageCount(res.data.electronics.last_page)
        //         setCurrentPage(res.data.electronics.current_page)
        //     })
        //     .catch(res => {
        //         console.log(res)
        //     })

        if (category === "all") {
            await Axios.get('api/allitems')
                .then(res => setstate(res.data.data))
        } else if (category === "electronics") {
            await Axios.get(`/api/${category}?page=${page}`)
                .then(res => {
                    setstate(res.data.electronics.data)
                    setPages(res.data.electronics)
                    setPageCount(res.data.electronics.last_page)
                    setCurrentPage(res.data.electronics.current_page)
                })
        } else if (category === "mobile") {
            await Axios.get(`/api/${category}?page=${page}`)
                .then(res => {
                    setstate(res.data.mobiles.data)
                    setPages(res.data.mobile)
                    setPageCount(res.data.mobile.last_page)
                    setCurrentPage(res.data.mobile.current_page)
                })
        } else if (category === "fashion") {
            await Axios.get(`/api/${category}?page=${page}`)
                .then(res => {
                    setstate(res.data.fashions.data)
                    setPages(res.data.fashions)
                    setPageCount(res.data.fashions.last_page)
                    setCurrentPage(res.data.fashions.current_page)
                })
        }
    }

    const filterProducts = (start, end) => {
        if (start !== "" || end !== "") {
            let items = products

            if (state.length >= 1) {
                items = state.map(product => {
                    if (product.price < end && product.price > start) {
                        return <Product key={uuid()} product={product} />
                    }
                })
            } else {
                items = "No products have found, please change the search queries"
            }

            setProducts(items)
        } else {
            console.log("hi")
            let items = []

            if (state.length >= 1) {
                items = state.map(product => {
                    return <Product key={uuid()} product={product} />
                })
            } else {
                items = "No products have found, please change the search queries"
            }

            setProducts(items)
        }
    }

    return (
        <Div>
            <Header search={search} getData={getData} setSearch={setSearch} />
            <div id="wrapper">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar filterProducts={filterProducts} />
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
                                    {products}
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


export default index
