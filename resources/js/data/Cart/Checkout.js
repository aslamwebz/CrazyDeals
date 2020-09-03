import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #EF5350;
    background-repeat: no-repeat
}

.card {
    padding: 30px 25px 35px 50px;
    border-radius: 30px;
    box-shadow: 0px 4px 8px 0px #B71C1C;
    margin-top: 50px;
    margin-bottom: 50px
}

.border-line {
    border-right: 1px solid #BDBDBD
}

.text-sm {
    font-size: 13px
}

.text-md {
    font-size: 18px
}

.image {
    width: 60px;
    height: 30px
}

::placeholder {
    color: grey;
    opacity: 1
}

:-ms-input-placeholder {
    color: grey
}

::-ms-input-placeholder {
    color: grey
}

input {
    padding: 2px 0px;
    border: none;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 5px;
    margin-top: 2px;
    box-sizing: border-box;
    color: #000;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500
}

input:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border-bottom: 1px solid #EF5350;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.btn-red {
    background-color: #EF5350;
    color: #fff;
    padding: 8px 25px;
    border-radius: 50px;
    font-size: 18px;
    letter-spacing: 2px;
    border: 2px solid #fff
}

.btn-red:hover {
    box-shadow: 0 0 0 2px #EF5350
}

.btn-red:focus {
    box-shadow: 0 0 0 2px #EF5350 !important
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #EF5350
}

@media screen and (max-width: 575px) {
    .border-line {
        border-right: none;
        border-bottom: 1px solid #EEEEEE
    }
}`

const Checkout = ({ total, checkOut }) => {
    return (
        <Div>
            <div className="container-fluid px-1 px-md-2 px-lg-4 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-sm-11">
                        <div className="card border-0">
                            <div className="row justify-content-center">
                                <h3 className="mb-4">Checkout</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-7 border-line pb-3">
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">Name on the card</p> <input type="text" name="name" placeholder="Name" size="15" />
                                    </div>
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">Card Number</p>
                                        <div className="row px-3"> <input type="text" name="card-num" placeholder="0000 0000 0000 0000" size="18" id="cr_no" minLength="19" maxLength="19" />
                                            <p className="mb-0 ml-3">asd</p>
                                            <img className="image ml-1" src="https://i.imgur.com/WIAP9Ku.jpg" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">Expiry date</p> <input type="text" name="exp" placeholder="MM/YY" size="6" id="exp" minLength="5" maxLength="5" />
                                    </div>
                                    <div className="form-group">
                                        <p className="text-muted text-sm mb-0">CVV/CVC</p> <input type="password" name="cvv" placeholder="000" size="1" minLength="3" maxLength="3" />
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" checked readOnly /> <label htmlFor="chk1" className="custom-control-label text-muted text-sm">save my card for future payment</label> </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 text-sm-center justify-content-center pt-4 pb-4"> <small className="text-sm text-muted">Order number</small>
                                    <h5 className="mb-5">12345678</h5> <small className="text-sm text-muted">Payment amount</small>
                                    <div className="row px-3 justify-content-sm-center">
                                        <h2 className=""><span className="text-md font-weight-bold mr-2">$</span><span className="text-danger">{total}</span></h2>
                                    </div> <button type="submit" className="btn btn-red text-center mt-4" onClick={checkOut}>PAY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Checkout
