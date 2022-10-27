import NavLogo from '../imgs/logo-nav.png'
import { useState } from 'react'
import Form from './Form.jsx';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
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
        axios.post("http://localhost:4417/login", {
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
        <header className="navBar">
            <img src={NavLogo} alt="CryptoBytes Logo"/>
        </header>
        <Form formHandler={formHandler} handleUserName={handleUserName} handlePassword={handlePassword} />
        <Button variant="info" type="button" onClick={submit}>LogIn</Button>
        
        </>
    )
}

export default Login;