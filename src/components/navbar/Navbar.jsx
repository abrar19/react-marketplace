import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <Link to='/'>
                        <span className='text'>Marketplace</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Marketplace Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    <span>Become a seller</span>
                    <button>Join</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
