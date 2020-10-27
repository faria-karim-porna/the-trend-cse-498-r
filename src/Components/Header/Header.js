import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
const Header = () => {
  const cat = "Female T-shirt"
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <Link to = "/home"><a className="navbar-brand" href="#"><div className = "logo">The</div><div className = "logoLine"></div><div className = "logo">Trends</div><div className = "logoLine"></div></a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to = "/home"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Women's Fashion
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to = {`/product-categories/Female T-shirt`} className= "headerLink"><a className="dropdown-item" href="#">Female T-shirt</a></Link>
          <Link to = {`/product-categories/Saree`} className= "headerLink"><a className="dropdown-item" href="#">Saree</a></Link>
          <Link to = {`/product-categories/Salwar Kameez`} className= "headerLink"><a className="dropdown-item" href="#">Salwar Kameez</a></Link>
          <Link to = {`/product-categories/Vanity Bag`} className= "headerLink"><a className="dropdown-item" href="#">Vanity Bag</a></Link>
          <Link to = {`/product-categories/Ladies Watch`} className= "headerLink"><a className="dropdown-item" href="#">Ladies Watch</a></Link>
        </div>
      </li>


      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Men's Fashion
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to = {`/product-categories/Male T-shirt`} className= "headerLink"><a className="dropdown-item" href="#">Male T-shirt</a></Link>
        <Link to = {`/product-categories/Punjabi`} className= "headerLink"><a className="dropdown-item" href="#">Punjabi</a></Link>
        <Link to = {`/product-categories/Money Bag`} className= "headerLink"><a className="dropdown-item" href="#">Money Bag</a></Link>
        <Link to = {`/product-categories/Gents Watch`} className= "headerLink"><a className="dropdown-item" href="#">Gents Watch</a></Link>
        <Link to = {`/product-categories/Shirt`} className= "headerLink"><a className="dropdown-item" href="#">Shirt</a></Link>
        </div>
      </li>

      <li className="nav-item">
      <Link to = "/reviewCart" className= "headerLink"><div className = "headerButton">Cart</div></Link>
      </li>

      <li className="nav-item">
      <Link to = "/" className= "headerLink"><div className = "headerButton">Log Out</div></Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;