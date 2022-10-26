import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="miniNav">
            <table width="90%">
                <tr>
                    <td><p className="portfolio">Your Portfolio</p></td>
                    <td><Link to="/addcrypto"><Button variant="outline-primary" type="button">Add Crypto</Button></Link></td>
                </tr>
            </table>
        </header>
    )
}

export default Nav;