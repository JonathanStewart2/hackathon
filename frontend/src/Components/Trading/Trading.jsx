import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Col, Row } from 'react-bootstrap';
import Display from './Display.jsx'
import { Link } from 'react-router-dom';


const Trading = () => {
    const [crypto, setCrypto] = useState([])
    const [request, setRequest] = useState("");

    const changeHandler = (e) => {
        setRequest(e.target.value);
    };

    useEffect(() => {
        const displayCrypto = async () => {
            const res = await axios.get('http://localhost:4417/api/search');
            console.log(res.data);
            const data = res.data;
            let cloneCrypto = crypto;
            for (let i = 0; i < data.length; i++){
                let newCrypto = {
                    symbol: data[i].asset_id,
                    name: data[i].name,
                    price: parseFloat(data[i].price_usd).toFixed(5)
                }
                cloneCrypto.push(newCrypto);
            }
            setCrypto(cloneCrypto);
        };
        displayCrypto();
      }, []);



    return crypto && (
        <div className="pageDiv">
            <input type="text" default="Crypto" value={request} onChange={changeHandler} />
            <Link to={`trading/search/${request}`}><Button type="button">Crypto Search</Button></Link>
            <br/>
            <h4 className="heading4">Top Cryptocurrencies:</h4>
            <Container>
              <Row xs={'auto'} md={'auto'} className="g-4">
                {
                    crypto.map((item) => (
                        <Col>
                            <Display
                                symbol={item.symbol}
                                name={item.name}
                                price={item.price}
                                />
                        </Col>
                    ))
                }
              </Row>
          </Container>
        </div>
    )
}

export default Trading;