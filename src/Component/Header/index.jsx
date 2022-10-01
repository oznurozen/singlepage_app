import React from 'react'
import logo from '../../Images/logo.png'
import { NavLink } from 'react-router-dom'
import{ FaUser }from'react-icons/fa';
import './style.css';


const Header = () => {
  return (
    <header>
        <div className='container container-flex'>
            <div>
                <img src={logo} alt="logo" size={40} className='logo'/>
            </div>
            
            <nav>
                <div className="list">
                    <NavLink to="/" className="listItem" activeClassName="activeItem" >Home</NavLink>
                    <NavLink to="/about" className="listItem" activeClassName="activeItem" >About</NavLink>
                    <NavLink to="/services" className="listItem" activeClassName="activeItem" >Services</NavLink>
                    <NavLink to="/contact" className="listItem" activeClassName="activeItem" >Contact</NavLink>
                    <NavLink to="/policy" className="listItem" activeClassName="activeItem" >Policy</NavLink>
                   
                </div>
                
            </nav>
            <div className='icons'>
                <FaUser size={25}/>
            </div>

        </div>
    </header>
  )
}

export default Header
