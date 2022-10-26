import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import NavLogo from './Components/imgs/logo-nav.png'
import FootLogo from './Components/imgs/foot-logo.png';
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Edit from './Components/Portfolio/Edit.jsx'
import Remove from './Components/Portfolio/Remove.jsx'
import AddCrypto from './Components/Portfolio/AddCrypto.jsx'
import Trading from './Components/Trading/Trading.jsx'
import Buy from './Components/Trading/Buy.jsx'
import Search from './Components/Trading/Search.jsx'
import Home from './Components/Home.jsx'
import Signup from './Components/Sign-up.jsx'
import Login from './Components/Login.jsx'
import { useState } from 'react'


function App() {
  const [token, useToken] = useState("");

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="appDiv">
      <Router>
        <nav className="navBar">
          <table width="90%">
            <tr>
              <th><Link to="/"><img src={NavLogo} alt="CryptoBytes Logo"/></Link></th>
              <th>  
                <Link to="/portfolio"><Button variant="outline-primary" type="button">Portfolio</Button></Link>
                <Link to="/trading"><Button variant="outline-success" type="button">Trading</Button></Link>
              </th>
            </tr>
          </table>
          
         </nav>
        <div className="contentDiv">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
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
      <footer className="headFoot">
        <img className="footLogo" src={FootLogo} alt="Footer CryptoBytes Logo" />
      </footer>
    </div>
  );
}

export default App;
