import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.jsx';
import Details from './Details.jsx';
import { Button, Container, Col, Row } from 'react-bootstrap';

const Edit = () => {
    const { id } = useParams();
    const [crypto, setCrypto] = useState()

    useEffect(() => {
        const getCrypto = async () => {
            const res = await axios.get(`http://localhost:4417/getPortfolio/${id}`);
            console.log(res.data);
            setCrypto(res.data);
        };
        getCrypto();
      }, [id]);

    return crypto && (
        <> 
            <Nav />
            <Container>
              <Row xs={'auto'} md={'auto'} className="g-4">
                <Details
                    id={crypto._id}
                    name={crypto.name}
                    crypto={crypto.crypto}
                    />
              </Row>
            </Container>
        </>
    )
}
export default Edit;