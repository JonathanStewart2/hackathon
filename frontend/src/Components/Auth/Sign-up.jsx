import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [status, setStatus] = useState("");

    const formHandler = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const handleUserName = (e) => {
        setUsername(e.target.value);
        console.log(username)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password)
    }

    const submit = () => {
        axios.post("http://localhost:4417/signup", {
            username: username,
            password: password
        })
        .then(res => {
            if (res.data) {
                setStatus("Success");  
            } else {
                setStatus("Failed");   
            }
            console.log(status)
        })

    }

    return (
        <>
        <form onSubmit={formHandler}>
            <input placeholder="Username" type="text" value={username} onChange={handleUserName} />
            <input placeholder="Pasword:" type="text" value={password} onChange={handlePassword} />
            <Button variant="info" type="button" onClick={submit}>Sign-Up</Button>
        </form>
        </>
    )
}

export default SignUp;