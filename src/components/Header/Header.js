import React from 'react';
import './Header.css';
// import logo from '../../profile.jpg';

const Header = () => {
    return (
        <div className='nav'>
            <nav>
                <h1>Yoga Meditation</h1>
            </nav>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;