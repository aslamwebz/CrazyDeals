import React, { useState, useCallback, useContext } from 'react'
import { withRouter } from "react-router-dom";
import app from '../base';
import * as firebase from 'firebase'
import 'firebase/auth'

const Register = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const db = firebase.firestore()

    const handleSignUp = useCallback(async event => {
        const { em, ps } = event.target.elements
        event.preventDefault();
        //? try to register or present the error
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(em.value, ps.value)
                .then(u => {

                    return db.collection('users').doc(u.user.uid).set({
                        profilepic: "asdf"
                    })


                })
        } catch (err) {
            alert(err)
        }
    }, [history])

    return (
        <div>
            <div className="container py-5 py-lg-5 pt-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="card bg-secondary border-0">
                            <div className="card-header bg-transparent pb-5">
                                <div className="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
                                <div className="text-center">
                                    <a href="#" className="btn btn-neutral btn-icon mr-4">
                                        <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg" /></span>
                                        <span className="btn-inner--text">Github</span>
                                    </a>
                                    <a href="#" className="btn btn-neutral btn-icon">
                                        <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg" /></span>
                                        <span className="btn-inner--text">Google</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-body px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small>Or sign up with credentials</small>
                                </div>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                                            </div>
                                            <input className="form-control" placeholder="Name" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                            </div>
                                            <input className="form-control" name="em" type="email" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input className="form-control" type="password" name="ps" />
                                        </div>
                                    </div>
                                    <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
                                    <div className="row my-4">
                                        <div className="col-12">
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" id="customCheckRegister" type="checkbox" />
                                                <label className="custom-control-label" htmlFor="customCheckRegister">
                                                    <span className="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" type="submit" className="btn btn-primary mt-4">Create account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Register)
