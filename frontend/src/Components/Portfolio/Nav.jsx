import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search.jsx';
import { useState } from 'react';

const Nav = () => {
    const [request, setRequest] = useState("")
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setRequest(e.target.value);
    };

    const clickHandler = () => {
        navigate(`/search/${request}`)
    }

    return (
        <header className="miniNav">
            <table width="90%">
                <tr>
                    <td><p className="portfolio">Your Portfolio</p></td>
                    <td>
                        <input type="text" default="searchPortfolio" value={request} onChange={changeHandler} />
                        <Link to={`./search/${request}`}><Button variant="outline-warning" type="button">Find</Button></Link>
                    </td>
                    <td><Link to="/addcrypto"><Button variant="outline-primary" type="button">Add Crypto</Button></Link></td>
                </tr>
            </table>
        </header>
    )
}

export default Nav;