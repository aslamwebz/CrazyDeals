import React, { useState, useCallback, useContext } from 'react'
import { withRouter } from "react-router-dom";
import app from '../base';
import * as firebase from 'firebase'
import 'firebase/auth'
import { useHistory } from "react-router-dom";

const Register = (props) => {
    const history = useHistory()
    const history2 = props.history

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const db = firebase.firestore()

    const handleSignUp = useCallback(async event => {
        const { em, ps, psc, displayName, profilePic } = event.target.elements
        event.preventDefault();
        //? try to register or present the error
        console.log(profilePic)
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(em.value, ps.value)
                .then(u => {

                    var user = firebase.auth().currentUser;
                    var name, email, photoUrl, uid, emailVerified
                    if (user) {
                        // var user = firebase.auth().currentUser;
                        user.updateProfile({
                            displayName: displayName,
                            photoURL: "https://example.com/user/profile.jpg",
                        }).then(function () {
                            // Update successful.
                            console.log('User Profile Updated Successfully');
                        }).catch(function (error) {
                            // An error happened.
                        });
                        // User is signed in.
                        if (user != null) {
                            name = user.displayName;
                            email = user.email;
                            photoUrl = user.photoURL;
                            emailVerified = user.emailVerified;
                            uid = user.uid;
                            console.log(name, email, photoUrl, uid, emailVerified)
                            // The user's ID, unique to the Firebase project. Do NOT use
                            // this value to authenticate with your backend server, if
                            // you have one. Use User.getToken() instead.
                        }

                        history.push('/admin')
                    } else {
                        // No user is signed in.
                    }
                })
        } catch (err) {
            alert(err)
        }
    }, [history])

    return (
        <div>
            <div className="container  py-lg-5 pt-lg-5">
                <div className="row justify-content-center align-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="card border-0">

                            <div className="card-body px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small>Sign up with credentials</small>
                                </div>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                            </div>
                                            <input className="form-control" name="em" type="email" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input className="form-control" type="password" name="ps" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input className="form-control" type="password" name="psc" placeholder="Confirm Password" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input className="form-control" type="text" name="displayName" placeholder="Display Name" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input className="form-control" type="file" name="profilePic" required />
                                        </div>
                                    </div>
                                    <div className="text-muted font-italic"><small>password strength: <span className="text-success font-weight-700">strong</span></small></div>
                                    <div className="row my-4">
                                        <div className="col-12">
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" id="customCheckRegister" type="checkbox" required />
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
