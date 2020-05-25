import React, { useState } from 'react'
import Axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('/api/login', {
            email, password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                <button className="btn btn-submit">Submit</button>
            </form>
        </div>
    )
}


export default Login