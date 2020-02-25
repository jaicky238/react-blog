import React from 'react'
import {Link} from 'react-router-dom'
import './style.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="headerMenu">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Conact Us</Link>
            </nav>
           
        </header>
    )
}
