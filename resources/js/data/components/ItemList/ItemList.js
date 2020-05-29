import React, { useEffect, useState } from 'react'
import './style.css'
import Sidebar from '../Sidebar/Sidebar'
import Product from '../Product/Product'
import Axios from 'axios'


const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        Axios.get("/api/products")
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }

    const productsData = products.map(product => {
        return (
            <Product key={product.id} product={product} />
        )
    })

    return (
        <div>
            <div id="wrapper">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="grid-selector">
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
                            <div className="container-fluid col-md-12">
                                <div id="grid">
                                    {products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })}
                                </div >

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ItemList
