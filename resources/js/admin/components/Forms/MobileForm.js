import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'

const MobileForm = (props) => {
    const [edit, setEdit] = useState(false)
    const [product, setProduct] = useState([])
    const [productData, setProductData] = useState([])
    const { id, operation } = props
    useEffect(() => {
        if (operation === "createMobile") {
            const data =
            {
                'name': "",
                'brand': "",
                'model': "",
                'available': "",
                'sold': "",
                'price': "",
                'discount': "",
                'processor': "",
                'memory': "",
                'storage': "",
                'display': "",
                'camera': "",
                'featured': "yes",
                'shipping': "",
                'condition': "",
                'color': "",
                'year': "",
                'os': "",
                'user_id': "1",
                'image': "",
            }

            setProductData(data)
        } else {
            getProduct()
        }
        let inputs = document.getElementsByTagName("input")
        // check if operation is edit or view
        if (operation === "editMobile" || operation === "createMobile") {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].disabled = false
            }
            setEdit(true)
        }
        // Get the product from database

    }, [])

    const getProduct = () => {
        Axios.get(`/api/mobile/${id}`)
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
        if (operation === "editMobile") {
            Axios.put(`/api/mobile/${id}`,
                productData
            )
                .then(res => console.log(res.data))
                .catch(err => console.log(err.data))
        }

        if (operation === "createMobile") {
            Axios.post(`/api/mobile`, productData, {

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
        if (operation === "createMobile" || operation === "editMobile") {
            return <div className="col-md-12">
                <button className="btn btn-submit" type="submit">Submit</button>
            </div>

        }
    }

    const imageData = () => {
        if (operation === "viewMobile" || operation === "editMobile") {
            return <input type="hidden" name="image" value={productData.image} />
        } else {
            return <input type="file" name="image" className="form-control" onChange={(e) => handleImage(e)} />

        }
    }

    const formData = () => {
        return <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
                <div className="form-group col-md-12">
                    {imageData()}
                    <input type="hidden" name="sold" value={productData.sold ? productData.sold : 0} />
                    <input type="hidden" name="featured" value={productData.featured} onChange={(e) => handleChange(e)} />
                    <input type="hidden" name="user_id" value={productData.user_id} onChange={(e) => handleChange(e)} />

                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="">name</label>
                    <input type="text" name="name" id="" className="form-control" placeholder="" value={productData.name} disabled onChange={(e) => handleChange(e)} />
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
                <div className="form-group col-md-3">
                    <label htmlFor="">processor</label>
                    <input type="text" name="processor" id="" className="form-control" placeholder="" value={productData.processor} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">memory</label>
                    <input type="text" name="memory" id="" className="form-control" placeholder="" value={productData.memory} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">storage</label>
                    <input type="text" name="storage" id="" className="form-control" placeholder="" value={productData.storage} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">display</label>
                    <input type="text" name="display" id="" className="form-control" placeholder="" value={productData.display} disabled onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="">camera</label>
                    <input type="text" name="camera" id="" className="form-control" placeholder="" value={productData.camera} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">os</label>
                    <input type="text" name="os" id="" className="form-control" placeholder="" value={productData.os} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">year</label>
                    <input type="text" name="year" id="" className="form-control" placeholder="" value={productData.year} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">condition</label>
                    <input type="text" name="condition" id="" className="form-control" placeholder="" value={productData.condition} disabled onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="">available</label>
                    <input type="text" name="available" id="" className="form-control" placeholder="" value={productData.available} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">sold</label>
                    <input type="text" name="sold" id="" className="form-control" placeholder="" value={productData.sold} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">price</label>
                    <input type="text" name="price" id="" className="form-control" placeholder="" value={productData.price} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="">discount</label>
                    <input type="text" name="discount" id="" className="form-control" placeholder="" value={productData.discount} disabled onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-4">
                    <label htmlFor="">color</label>
                    <input type="text" name="color" id="" className="form-control" placeholder="" value={productData.color} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="">shipping</label>
                    <input type="text" name="shipping" id="" className="form-control" placeholder="" value={productData.shipping} disabled onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="">condition</label>
                    <input type="text" name="condition" id="" className="form-control" placeholder="" value={productData.condition} disabled onChange={(e) => handleChange(e)} />
                </div>

            </div>
            <div className="row">
                {submitButton()}
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
                                        <div className="text-muted text-center mt-2 mb-3"><small>Add Mobiles</small></div>

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

export default MobileForm
