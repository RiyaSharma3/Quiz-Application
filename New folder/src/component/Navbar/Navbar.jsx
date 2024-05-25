import React from 'react';
import './Navbar.css';
import logo from './logo_image.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <a id="logo">QuizyBee</a>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

      <div className="menu">
        <a className="home" href="#section-home">Home</a>
        <a className="home" href="#section-about">About</a>
        <a className="home" href="#section-books">Library</a>
        
      </div>
    </div>
  );
};

export default Navbar;
