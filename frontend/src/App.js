import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Edit from './Components/Portfolio/Edit.jsx'
import Remove from './Components/Portfolio/Remove.jsx'
import AddCrypto from './Components/Portfolio/AddCrypto.jsx'
import Trading from './Components/Trading/Trading.jsx'
import Home from './Components/Home.jsx'



function App() {
  return (
    <div className="appDiv">
      <Router>
        <nav className="navBar">
          <h3 className="navLogo">Crypto Portfolio Tracker</h3>
          <Link to="/"><Button variant="outline-warning" type="button">Home</Button></Link>
          <Link to="/portfolio"><Button variant="outline-primary" type="button">Portfolio</Button></Link>
          <Link to="/trading"><Button variant="outline-success" type="button">Trading</Button></Link>
        </nav>
        <div className="contentDiv">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/edit/:id" element={<Edit />} />
            <Route path="/portfolio/remove/:id" element={<Remove />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="/addcrypto" element={<AddCrypto />} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
