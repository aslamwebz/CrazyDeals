import React, { useState } from 'react'
import Axios from 'axios';

const Register = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('api/register', {
            name, password, email
        })
            .then(res => console.log(res))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                <button className="btn btn-submit">Submit</button>
            </form>
        </div>
    )
}


export default Register