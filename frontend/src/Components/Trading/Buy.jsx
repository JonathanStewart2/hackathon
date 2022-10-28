import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Col, Row, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Buy = () => {
    const { id } = useParams();
    const [request, setRequest] = useState([]);
    const [fiat, setFiat] = useState("");
    const [crypto, setCrypto] = useState("");
    const [conversion, setConversion] = useState("");

    useEffect(() => {
        const getCrypto = async () => {
            const res = await axios.get(`http://localhost:4417/api/search/${id}`);
            console.log(res);
            const data = res.data;
            let requestedCrypto = [{
                 symbol: data[0].asset_id,
                 name: data[0].name,
                 price: data[0].price_usd
                 }]
             setRequest(requestedCrypto);
        };
    getCrypto();
    }, [id]);

    const formHandler1 = (e) => {
        setCrypto(e.target.value);
    }

    const formHandler2 = (e) => {
        setFiat(e.target.value);
    }

    return (
           
        <Container>
            <Row xs={'auto'} md={'auto'} className="g-4">
            <Card border="primary" style={{ width: '10rem' }}>
                <Card.Body>
                    <Card.Title>{request[0].symbol}</Card.Title>
                    <Card.Subtitle>{request[0].name}</Card.Subtitle>
                    <Card.Text>{request[0].price}</Card.Text>
                </Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formAmount" onChange={formHandler1}>
                        <Form.Label>Amount to buy</Form.Label>
                        <Form.Control type="number" placeholder="0.00" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAmount" onChange={formHandler2}>
                        <Form.Label>Amount to buy</Form.Label>
                        <Form.Control type="number" placeholder="0.00" />
                    </Form.Group>
                </Form>
            </Card>
            </Row>
        </Container>
    )
}
export default Buy