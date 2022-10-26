import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import NavLogo from './Components/imgs/logo-nav.png'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Edit from './Components/Portfolio/Edit.jsx'
import Remove from './Components/Portfolio/Remove.jsx'
import AddCrypto from './Components/Portfolio/AddCrypto.jsx'
import Trading from './Components/Trading/Trading.jsx'
import Buy from './Components/Trading/Buy.jsx'
import Search from './Components/Trading/Search.jsx'
import Home from './Components/Home.jsx'



function App() {
  return (
    <div className="appDiv">
      <Router>
        <nav className="navBar">
          <table>
            <tr>
              <th><img src={NavLogo} alt="CryptoBytes Logo"/></th>
              <th>  
                <Link to="/"><Button variant="outline-light" type="button">Home</Button></Link>
                <Link to="/portfolio"><Button variant="outline-primary" type="button">Portfolio</Button></Link>
                <Link to="/trading"><Button variant="outline-success" type="button">Trading</Button></Link>
              </th>
            </tr>
          </table>
          
         </nav>
        <div className="contentDiv">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/edit/:id" element={<Edit />} />
            <Route path="/portfolio/remove/:id" element={<Remove />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/trading/buy/:id" element={<Buy />} />
            <Route path="/trading/search/:id" element={<Search />} />
            <Route path="/addcrypto" element={<AddCrypto />} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
