import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <Link to="/portfolio"><Button variant="outline-primary" type="button">Portfolio</Button></Link>
            <Link to="/addcrypto"><Button variant="outline-primary" type="button">Add Crypto</Button></Link>
        </header>
    )
}

export default Nav;