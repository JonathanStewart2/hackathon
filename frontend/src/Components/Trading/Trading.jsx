import { useState } from 'react';
import axios from 'axios';


const Trading = () => {
    const [crypto, setCrypto] = useState("")
    const [request, setRequest] = useState("");

    const changeHandler = (e) => {
        setRequest(e.target.value);
    };

    const getCrypto = async (request) => {
        setRequest(request);
        const response = await axios.get('http://localhost:4417/api/search');
        console.log(response);
        setCrypto(response);
        console.log(crypto)
    };

    return (
        <>
            <h3>Crypto Search</h3>
            <input type="text" default="Crypto" value={request} onChange={changeHandler} />
            <button type="button" onClick={() => getCrypto(request)}>Search</button>

        </>
    )
}

export default Trading;