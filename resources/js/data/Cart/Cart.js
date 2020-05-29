import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import Checkout from './Checkout'
import { fetchCart } from '../actions/cartActions'
import { connect } from 'react-redux'

const Div = styled.div`

margin:40px;
.d{
    display: flex;
    padding:10px;
}

.d button{
    font-size:20px;
    padding:5px 14px;
}

.d p{
    font-size:20px;
    margin:10px;
}

.d input{
    width:50px;
    text-align:center;
}

.checkout{
    width:100%;
}

.modal-lg{
    max-width:1200px;
}

`
const Cart = (props) => {
    console.log(props.cart, 'cart')

    const [items, setItems] = useState([])

    useEffect(() => {
        props.fetchCart()
    }, [])

    useEffect(() => {
        countTotal()
        setItems(props.cart)
    }, [props.cart])

    const [subTotal, setSubTotal] = useState()

    const countTotal = () => {
        let t = 0;

        items.map(item => {
            t += item.quantity * item.price
        })

        let p = (t / 100) * 5
        t -= p
        setSubTotal(t)
    }

    // const addItem = () => {

    //     setItems(
    //         [...items,
    //         { id: id, name: 'lorem', price: 100, quantity: 10, available: 20 },]
    //     )
    //     console.log(items, id)
    //     setId(id + 1)
    //     countTotal()

    // }

    const delItem = (delid) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const itemData = items.filter(item => {
                    return item.id !== delid
                })

                setItems(itemData)

                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
            }
        })


    }

    const quantityController = (e, itemId, itemQuantity, itemAvailable) => {

        const itemData = items.filter(item => {
            if (item.id === itemId && itemQuantity >= 1 && itemQuantity < itemAvailable) {
                if (e === '+') {
                    return item.quantity = itemQuantity + 1
                } else if (e === '-') {
                    if (itemQuantity == 1) {
                        return item.quantity
                    } else {
                        return item.quantity = itemQuantity - 1
                    }
                }
            } else {
                return item
            }

        })

        setItems(itemData)
        countTotal()

    }

    const quantityControllerChange = (e, itemId, itemQuantity, itemAvailable) => {
        const itemData = items.filter(item => {
            if (item.id === itemId && e.target.tagName.toUpperCase() == 'INPUT') {
                console.log(e.target.value)
                return item.quantity = parseInt(e.target.value)
            } else {
                return item
            }
        })

        setItems(itemData)
        countTotal()

    }

    const checkOut = () => {
        if (items.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please add something to Check Out!',
            })
        } else {
            Swal.fire({
                title: '<strong>HTML <u>example</u></strong>',
                icon: 'info',
                html:
                    'You can use <b>bold text</b>, ' +
                    '<a href="//sweetalert2.github.io">links</a> ' +
                    'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i className="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    '<i className="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            })
        }
    }

    return (
        <Div>
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Item ID</th>
                                <th scope="col">PRODUCT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">Available</th>
                                <th scope="col">TOTAL</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(items, 'items')}
                            {items.map(item => {
                                return (<tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <span className="d">
                                            <button className="btn btn-info" onClick={e => quantityController("+", item.id, item.quantity, item.available)}>+</button>
                                            <input value={item.quantity} readOnly />
                                            <button className="btn btn-info" onClick={e => quantityController("-", item.id, item.quantity, item.available)}>-</button>
                                        </span>
                                    </td>
                                    <td>{item.available}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td>
                                        <span className="d">
                                            <button className="btn btn-danger" onClick={() => delItem(item.id)}>X</button>
                                        </span>
                                    </td>
                                </tr>)

                            })}
                        </tbody>
                    </table>
                </div>

                <div className="col-md-4">
                    <div className="">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Cart Totals</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>SUBTOTAL</b></td>
                                    <td>{subTotal}</td>
                                </tr>
                                <tr>
                                    <td><b>Discount</b></td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td><b>TOTAL</b></td>
                                    <td>{subTotal}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="btn btn-large btn-primary checkout" data-toggle="modal" data-target="#exampleModalCenter" >Proceed to Checkout</div>

                    </div>
                </div>
                {/* <div className="btn btn-large btn-primary" onClick={addItem}>Add Item</div> */}

            </div>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Checkout />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </Div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart.cart
})


export default connect(mapStateToProps, { fetchCart })(Cart)
