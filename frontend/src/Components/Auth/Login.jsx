import NavLogo from '../imgs/logo-nav.png'
import { useState } from 'react'
import Form from './Form.jsx';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

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
        // console.log("UN: ", username)
        // console.log("PW: ", password)
        axios.post("http://localhost:4417/login", {
            username: username,
            password: password
        })
        .then(res => {
            if (res.data) {
                navigate("/");  
            } else {
                setStatus("Failed");   
            }
            console.log("RES: ", res)
            console.log("STATUS: ", status)
        })

    }

    return (
        <>
        <header className="navBar">
            <img src={NavLogo} alt="CryptoBytes Logo"/>
        </header>
        <Form formHandler={formHandler} handleUserName={handleUserName} handlePassword={handlePassword} />
        <Button variant="primary" type="button" onClick={submit}>Log In</Button>
        {status}
        <div>
            <br />
            <p>Not got an account?</p>
            <Link to={`../signup`}><Button variant="warning" type="button">Register</Button></Link>
        </div>
        </>
    )
}

export default Login;