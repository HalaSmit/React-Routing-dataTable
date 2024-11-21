import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Product() {

    const NavCss = {
        textDecoration: 'none',
        color: 'black',
        padding: '10px 15px',
    }
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center' }}>Product Categories</h1>

            <nav style={NavCss}>
                <Link to="Electronics" style={NavCss}>Electronics</Link>
                <Link to="Jewelery" style={NavCss}> Jewellery </Link>
            </nav>

            <div style={NavCss}>

                <Outlet />
            </div>
        </div>
    );
}
