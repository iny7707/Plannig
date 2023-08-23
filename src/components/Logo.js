import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Logo(props) {
    return (
        <nav className='login-navbar'>
            <div className='login-logo'>
                <Link to='/'>푸드플래닛</Link>
            </div>
            <hr></hr>
        </nav>
    );
}

export default Logo;