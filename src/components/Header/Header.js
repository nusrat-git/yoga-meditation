import React from 'react';
import './Header.css';
import logo from '../../logo.png';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div>
                    <a href="/home">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;