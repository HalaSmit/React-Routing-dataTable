import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const NavCss = {
        margin: '0 15px',
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
    }
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: 'black',
        color: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Link to="/" style={NavCss} > Home </Link>
      <Link to="/about" style={NavCss} > About </Link>
      <Link to="/Contact" style={NavCss}> Contact </Link>
      <Link to="/Product" style={NavCss}> Product </Link>
    </nav>
  );
}
