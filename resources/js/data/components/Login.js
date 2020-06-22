import React, { useState, useCallback } from 'react'
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import app from '../../admin';

const Login = () => {
    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = useCallback(async event => {
        event.preventDefault();
        //? try to login or present the error
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email, password);
            history.push("/admin")
        } catch (err) {
            alert(error)
        }
    })

    return (
        <div>
            <form onSubmit={handleSignup}>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                <button className="btn btn-submit">Submit</button>
            </form>
        </div>
    )
}


//? enclose with HOC to use auth
export default withRouter(Login)