import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx'

const Portfolio = () => {
    const [crypto, setCrypto] = useState("");
    const [portfolio, setPortfolio] = useState([]);

    const newCrypto = ({ target }) => {
        setCrypto(target.value)
    }

    const addCrypto = () => {
        //POST TO MONGO
    }

    const addCoins = () => {
        //TODO: PATCH 
    }

    useEffect(() => {
        console.log('Loaded');
        setPortfolio([])
        const getPortfolio = async () => {
            const response = await axios.get('http://localhost:4417/getPortfolio');
            const data = response.data;

            for (let i = 0; i < data.length; i++){
                let newCrypto = {
                    symbol: data[i]._id,
                    name: data[i].name,
                    crypto: data[i].crypto
                }
                let clonePortfolio = portfolio;
                clonePortfolio.push(newCrypto);
                setPortfolio(clonePortfolio);
            }
        };
    getPortfolio();
    }, []);


    return (
        <div>
            <Nav />
            <div>
                {
                    portfolio.map((item) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item._id}</Card.Title>
                                <Card.Subtitle>{item.name}</Card.Subtitle>
                                <Card.Text>{item.crypto} {item.symbol}</Card.Text>
                                <Button variant="success" type="button">Add</Button>
                                <Button variant="danger" type="button">Remove</Button>
                            </Card.Body>
                        </Card >
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;