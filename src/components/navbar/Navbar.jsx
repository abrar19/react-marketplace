import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom'
import './navbar.scss'
import dpLogo from './img/logo.jpg'

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "Abrar Haque",
        isSeller: true
    }

    const {pathname} = useLocation();

    return (
        <div className={active || pathname != '/' ? 'navbar active' : 'navbar'}>
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
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpenOptions(!openOptions)}>
                            <img src={dpLogo} alt="" />
                            <span>{currentUser.username}</span>
                            {openOptions && <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to="/mygigs" className='link'>Gigs</Link>
                                        <Link to="/add" className='link'>Add New Gig</Link>
                                    </>
                                )}
                                <Link to="/orders" className='link'>Orders</Link>
                                <Link to="/messages" className='link'>Messages</Link>
                                <Link to="/logout" className='link'>Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            { (active || pathname != '/') && <>
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
