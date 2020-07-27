import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { useHistory } from "react-router-dom";

const ElectronicsForm = (props) => {
    const history = useHistory()

    const [edit, setEdit] = useState(false)
    const [product, setProduct] = useState([])
    const [productData, setProductData] = useState([])
    // const { operation, id } = props.match.params
    const { operation, id } = props
    useEffect(() => {
        if (operation === "createElectronics") {
            const data =
            {
                'name': "",
                'quantity': "",
                'price': "",
                'discount': "",
                'sold': "1",
                'brand': "",
                'model': "",
                'condition': "",
                'year': "",
                'processor': "",
                'speed': "",
                'memory': "",
                'screen': "",
                'color': "",
                'os': "",
                'storage': "",
                'image': [],
            }

            setProductData(data)
        } else if (operation === "viewElectronics" || operation === "editElectronics") {
            getProduct()
        }
        let inputs = document.getElementsByTagName("input")
        // check if operation is edit or view
        if (operation === "editElectronics" || operation === "createElectronics") {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false
            }
            setEdit(true)
        }
        // Get the product from database

    }, [])

    const getProduct = () => {
        Axios.get(`/api/electronics/${id}`)
            .then(res => {
                setProduct(res.data.product)
                setProductData(res.data.product)
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        let p = { ...productData, [name]: value }
        setProductData(p)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (operation === "editElectronics") {
            Axios.put(`/api/electronics/${id}`,
                productData
            )
                .then(res => console.log(res.data))
                .catch(err => console.log(err.data))
        }

        if (operation === "createElectronics") {
            Axios.post(`/api/electronics`, productData, {

            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err.data))
        }
    }

    const handleImage = (e) => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        createImage(files[0]);


    }

    const createImage = (file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            console.log(e.target.result)
            let p = { ...productData, image: e.target.result }
            setProductData(p)
        };
        reader.readAsDataURL(file);
        console.log(productData.image)
    }


    const submitButton = () => {
        if (operation === "createElectronics" || operation === "editElectronics") {
            return <div className="col-md-12">
                <button className="btn btn-info" type="submit">Submit</button>
            </div>

        }


    }

    const imageData = () => {
        if (operation === "viewElectronics" || operation === "editElectronics") {
            return <input type="hidden" name="image" value={productData.image} />
        } else {
            return <input type="file" name="image" className="form-control" onChange={(e) => handleImage(e)} />

        }
    }

    const formData = () => {
        return <form onSubmit={(e) => handleSubmit(e)}>
            <label>{product.id}</label>
            <div className="row">
                <div className="form-group col-md-12">
                    {imageData()}
                    <input type="hidden" name="sold" value={productData.sold ? productData.sold : 0} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="">name</label>
                    <input type="text" name="name" id="" className="form-control" placeholder="" value={productData.name} disabled onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">

                    <div className="form-group">
                        <label htmlFor="">Quantity</label>
                        <input type="number" name="quantity" id="" className="form-control" placeholder="" value={productData.quantity} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">price</label>
                        <input type="number" name="price" id="" className="form-control" placeholder="" value={productData.price} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">discount</label>
                        <input type="number" name="discount" id="" className="form-control" placeholder="" value={productData.discount} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">year</label>
                        <input type="number" name="year" id="" className="form-control" placeholder="" value={productData.year} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="">brand</label>
                    <input type="text" name="brand" id="" className="form-control" placeholder="" value={productData.brand} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="">model</label>
                    <input type="text" name="model" id="" className="form-control" placeholder="" value={productData.model} disabled onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">

                    <div className="form-group">
                        <label htmlFor="">processor</label>
                        <input type="text" name="processor" id="" className="form-control" placeholder="" value={productData.processor} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">speed</label>
                        <input type="number" name="speed" id="" className="form-control" placeholder="" value={productData.speed} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">memory</label>
                        <input type="number" name="memory" id="" className="form-control" placeholder="" value={productData.memory} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">screen</label>
                        <input type="number" name="screen" id="" className="form-control" placeholder="" value={productData.screen} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">

                    <div className="form-group">
                        <label htmlFor="">storage</label>
                        <input type="number" name="storage" id="" className="form-control" placeholder="" value={productData.storage} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">os</label>
                        <input type="text" name="os" id="" className="form-control" placeholder="" value={productData.os} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">color</label>
                        <input type="text" name="color" id="" className="form-control" placeholder="" value={productData.color} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label htmlFor="">condition</label>
                        <input type="text" name="condition" id="" className="form-control" placeholder="" value={productData.condition} disabled onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="col-md-6">
                    {submitButton()}
                </div>
                <div className="col-md-6  text-right">
                    <button className="btn btn-danger " onClick={(e) => {
                        e.preventDefault()
                        history.goBack()
                    }}>Go Back</button>
                </div>

            </div>
        </form>
    }

    return (
        <Div>
            <div className="container">
                <div>

                    <div className="container py-5 py-lg-5 pt-lg-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="card border-0 mb-0">
                                    <div className="card-header bg-transparent pb-5">
                                        <div className="text-muted text-center mt-2 mb-3"><small>Add Electroncs</small></div>

                                    </div>
                                    <div className="card-body px-lg-5 py-lg-5">
                                        {formData()}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Div>
    )
}

const Div = styled.div`
       
        img{
            height:200px;
        }
        `

export default ElectronicsForm
