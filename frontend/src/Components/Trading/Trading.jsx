import { useState, useEffect } from 'react';
import axios from 'axios';


const Trading = () => {
    const [crypto, setCrypto] = useState("")
    const [request, setRequest] = useState("");

    const changeHandler = (e) => {
        setRequest(e.target.value);
    };

    useEffect(() => {
        const displayCrypto = async () => {
            const res = await axios.get('http://localhost:4417/api/search');
            console.log(res);
            
        };
        displayCrypto();
      }, []);



    return (
        <>
            <h3>Crypto Search</h3>
            <input type="text" default="Crypto" value={request} onChange={changeHandler} />
            <button type="button">Search</button>

        </>
    )
}

export default Trading;