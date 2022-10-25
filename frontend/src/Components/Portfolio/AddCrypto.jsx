import Nav from './Nav.jsx'
import { useState } from 'react';
import axios from 'axios';

const AddCrypto = () => {
    const [symbol, setSymbol] = useState("");
    const [name, setName] = useState("");
    const [coins, setCoins] = useState("");
    const [newCrypto, setNewCrypto] = useState({});
    const [newID, setNewID] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleForm1 = (e) => {
        setSymbol(e.target.value);
    }

    const handleForm2 = (e) => {
        setName(e.target.value);
    }

    const handleForm3 = (e) => {
        console.log(e.target.value)
        setCoins(e.target.value);
    }

    const createObject = () => {

        let newCryptoObject = {
            _id: symbol,
            name: name,
            crypto: coins
        }

        const response = axios.post('http://localhost:4417/addCrypto', newCryptoObject)
        .then(response => console.log(response));
    }

    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit}>
                <input placeholder="Crypto symbol:" type="text" value={symbol} onChange={handleForm1} />
                <input placeholder="Crypto name:" type="text" value={name} onChange={handleForm2} />
                <input placeholder="Amount:" type="text" value={coins} onChange={handleForm3} />
                <button type="button" onClick={createObject}>Add</button>
            </form>
        </>
    )
}
export default AddCrypto;