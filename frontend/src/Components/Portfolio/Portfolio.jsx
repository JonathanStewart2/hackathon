import { useState, useEffect } from 'react';
import axios from 'axios';
import Details from './Details.jsx'
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx'

const Portfolio = () => {
    const [crypto, setCrypto] = useState("");
    const [portfolio, setPortfolio] = useState([]);

    const newCrypto = ({ target }) => {
        setCrypto(target.value)
    }

    // const cryptoPatch = (crypto) = {

    //     const response = axios.post(`http://localhost:4417/updatePortfolio/${crypto._id}`, //add new crypto value here),
    //     .then(response => console.log(response));
    // }

    const removeCoins = () => {
        //PATCH
        //cryptoPatch()
    }

    const addCoins = () => {
        //PATCH
         //cryptoPatch()
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
            <br />
            <Container>
              <Row xs={'auto'} md={'auto'} className="g-4">
                {
                    portfolio.map((item) => (
                        <Col>
                            <Details
                                id={item._id}
                                name={item.name}
                                crypto={item.crypto}
                                />
                            <Link to={`./${item._id}`}><Button variant="success" type="button">Edit</Button></Link>
                            <Button variant="danger" type="button">Remove</Button>
                        </Col>
                    ))
                }
              </Row>
          </Container>
        </div>
    )
}

export default Portfolio;