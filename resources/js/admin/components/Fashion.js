import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

const Cloths = () => {
    const [fashions, setFashions] = useState([])
    const [pages, setPages] = useState([1])
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const history = useHistory()

    useEffect(() => {
        getFashions()
    }, [])


    const getFashions = () => {

        getPostData(1);
    }

    const getPostData = async (page) => {
        await Axios.get(`/api/fashion?page=${page}`)
            .then(res => {
                setFashions(res.data.fashions.data)
                setPages(res.data.fashions)
                setPageCount(res.data.fashions.last_page)
                setCurrentPage(res.data.fashions.current_page)
            })
            .catch(res => {
                console.log(res)
            })

    }

    const handleClick = async (e, itemid, operation) => {
        e.preventDefault()
        if (operation === "edit") {
            // history.push("/electronics/edit/" + itemid)
            history.push(`/admin/fashion/editFashion/${itemid}`)
        }

        if (operation === "view") {
            history.push(`/admin/fashion/viewFashion/${itemid}`)

        }

        if (operation === "delete") {
            await Axios.delete(`/api/fashion/${itemid}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))

            getPostData(currentPage)
        }
    }

    const pagination = () => {
        let pageUrls = [{ page: 1, url: `/api/fashions?page=${1}` }]
        for (let i = 2; i <= pageCount; i++) {
            pageUrls.push({ page: i, url: `/api/fashions?page=${i}` })
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
                await Axios.get(`/api/fashions?page=${pageChange}`)
                    .then(res => {
                        setFashions(res.data.fashions.data)
                        setPages(res.data.fashions)
                        setPageCount(res.data.fashions.last_page)
                        setCurrentPage(res.data.fashions.current_page)
                    })
                    .catch(res => {
                        console.log(res)
                    })
            }
        }

        if (operation === "next") {
            pageChange = currentPage + 1
            if (currentPage < pageCount) {
                await Axios.get(`/api/fashions?page=${pageChange}`)
                    .then(res => {
                        setFashions(res.data.fashions.data)
                        setPages(res.data.fashions)
                        setPageCount(res.data.fashions.last_page)
                        setCurrentPage(res.data.fashions.current_page)
                    })
                    .catch(res => {
                        console.log(res)
                    })
            }
        }
    }

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {fashions.map(item => {
                        return <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <th scope="row"><a type="button" onClick={(e) => handleClick(e, item.id, "view")}>{item.name}</a></th>
                            <th scope="row">{item.price}</th>
                            <th scope="row">{item.discount}</th>
                            <th scope="row">{item.sold}</th>
                            <td>
                                <button className="btn btn-info btn-sm" onClick={(e) => handleClick(e, item.id, "edit")}>Edit</button>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
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
        </div>
    )
}

export default Cloths
