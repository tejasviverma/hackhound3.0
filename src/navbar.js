// src/Navbar.js
import React from 'react';
import './navbar.css'; // Create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Hackhound 3.0</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#themes">Themes</a></li>
        <li><a href="#prizes">Prizes</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
