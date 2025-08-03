import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {
    const navref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                navref.current.classList.add('nav-dark');
            } else {
                navref.current.classList.remove('nav-dark');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={navref} className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="Logo" />
                <ul>
                    {/* Page Routing Links */}
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#top-rated">Top Rated</a></li>
                    <li><a href="#upcoming">Upcoming</a></li>
                    <li><a href="#movies">Movies</a></li>
                   

                </ul>
            </div>

            <div className="navbar-right">
                <img src={search_icon} alt="Search" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="Notifications" className='icons' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="Profile" className='profile' />
                    <img src={caret_icon} alt="Caret" />
                    <div className="dropdown">
                        <p onClick={logout}>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
