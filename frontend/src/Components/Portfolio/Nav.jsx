import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Nav = (getPortfolio) => {
    return (
        <header>
            <button type="button" onClick={() => getPortfolio()}>My Portfolio</button>
            <Link to="/addcrypto"><Button variant="outline-primary" type="button">Add Crypto</Button></Link>
            <Link to="/removecrypto"><Button variant="outline-primary" type="button">Remove Crypto</Button></Link>
        </header>
    )
}

export default Nav;