import { useState } from 'react';
import axios from 'axios';


const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    const getPortfolio = async () => {
        const URL = 'http://localhost:4417/getPortfolio/ETH';
        const response = await axios.get(URL);
        console.log(response);
        setPortfolio(response);
        console.log(portfolio)
    }

    return (
        <div>
            <header>
                <button type="button" onClick={() => getPortfolio()}>My Portfolio</button>
                <button type="button">Add Invesment</button>
                <button type="button">Sell Investment</button>
            </header>
        </div>
    )
}

export default Portfolio;