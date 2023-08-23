import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <div className='inner'>
                    <span className='navbar-logo'>
                        <Link to='/'>푸드플래닛</Link>
                    </span>
                    <ul className='navbar-menu'>
                        <li><NavLink activeclassname='active' to='/map'>MAP</NavLink></li>
                        <li><NavLink activeclassname='active' to='/planning'>PLANNING</NavLink></li>
                        <li><NavLink activeclassname='active' to='/mypage'>MYPAGE</NavLink></li>
                        <li><Link activeclassname='active' to='/login'>LOGIN</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;