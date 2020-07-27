import React, { useState, useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import app from '../base';
import { AuthContext } from './Auth';

const Login = ({ history, location }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = useCallback(async event => {
        event.preventDefault();
        const { em, ps } = event.target.elements
        //? try to login or present the error
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(em.value, ps.value);
            history.push("/admin")
        } catch (err) {
            alert(err)
        }
    }, [history])

    //? get the current user status by auth context
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/admin" />
    }

    return (
        <div>

            <div className="container py-5 py-lg-5 pt-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7">
                        <div className="card bg-secondary border-0 mb-0">
                            <div className="card-header bg-transparent pb-5">
                                <div className="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
                                <div className="btn-wrapper text-center">
                                    <a href="#" className="btn btn-neutral btn-icon">
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
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form role="form" onSubmit={handleSignIn}>
                                    <div className="form-group mb-3">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                            </div>
                                            <input className="form-control" placeholder="Email" type="email" name="em" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-merge input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input className="form-control" placeholder="Password" type="password" name="ps" />
                                        </div>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                        <label className="custom-control-label" htmlFor=" customCheckLogin">
                                            <span className="text-muted">Remember me</span>
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary my-4" >Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <a href="#" className="text-light"><small>Forgot password?</small></a>
                            </div>
                            <div className="col-6 text-right">
                                <a href="/register" className="text-light"><small>Create new account</small></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


//? enclose with HOC to use auth
export default withRouter(Login)