import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
            <div className="logo">
                    <img src={logo} alt="MutaEngine Logo" className="logo-img" />
                </div>
                <ul className="nav-links">
                    <li><Link to='/'>Overview</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>Contact Us</li>
                    <li>Solutions</li>
                </ul>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign up</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
