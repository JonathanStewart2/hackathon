import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx'

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([{
        "_id": "BTC",
        "name": "Bitcoin",
        "crypto": "0.15"
    }, {
        "_id": "ETH",
        "name": "Ethereum",
        "crypto": "0.5"
    }]);

    const getPortfolio = async () => {
        const response = await axios.get('http://localhost:4417/getPortfolio/');
        console.log(response);
        setPortfolio(response);
        console.log(portfolio)
    }

    const addCoins = () => {

    }

    return (
        <div>
            <Nav getPortfolio />
            <div>
                {
                    portfolio.map((item) => (
                        <Card>
                            <Card.Body>
                                <Card.Title>{item._id}</Card.Title>
                                <Card.Subtitle>{item.name}</Card.Subtitle>
                                <Card.Text>{item.crypto} {item.symbol}</Card.Text>
                                <Link to="/addcrypto"><Button variant="outline-success" type="button">Add</Button></Link>
                                <Link to="/removecrypto"><Button variant="outline-success" type="button">Remove</Button></Link>
                            </Card.Body>
                        </Card >
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;