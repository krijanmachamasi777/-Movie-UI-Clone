import React, { use, useEffect, useRef } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
const Navbar = () => {
    const navref = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navref.current.classList.add('nav-dark');
            } else {
                navref.current.classList.remove('nav-dark');
                
            }
        }
        )
    }, [])
    return (
        <div ref={navref} className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => window.scrollTo(0, 0)}
                    >Home</NavLink></li>
                    <li><NavLink to="/tv" className={({ isActive }) => isActive ? 'active' : ''}> Popular</NavLink></li>
                    <li><NavLink to="/movies" className={({ isActive }) => isActive ? 'active' : ''}>Movies</NavLink></li>
                    <li><NavLink to="/new" className={({ isActive }) => isActive ? 'active' : ''}>Top Rated</NavLink></li>
                    <li><NavLink to="/my-list" className={({ isActive }) => isActive ? 'active' : ''}>Upcomming</NavLink></li>
                    <li><NavLink to="/languages" className={({ isActive }) => isActive ? 'active' : ''}>Browse by Languages</NavLink></li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="" className='icons' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="" className='profile' />
                    <img src={caret_icon} alt="" />
                    <div className="dropdown">
                        <p onClick={() => { logout() }}>sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
