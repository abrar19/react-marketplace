import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {

    const [active, setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        };
    }, []);

    return (
        <div className={active ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className="logo">
                    <Link to='/' className='link'>
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
            {active && <>
                <hr />
                <div className="menu">
                    <span>Tst</span>
                    <span>Tst</span>
                </div>
            </>}
        </div>
    );
}

export default Navbar;
