import React from 'react'
import homeimg from '../../Images/homeimg.jpg';
import { NavLink } from 'react-router-dom';
import './style.css';



const Services = () => {
  return (
    <div>
      <h1>Our Sercices</h1>
      <div className='services'>
        <div className='card'>
          <h2>Web Development</h2>
          <img src={homeimg} alt="services1"  className='serviceImg'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aspernatur.</p>
          <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/about" className="information">Get Information</NavLink>
          </div>
        </div>
        </div>
        <div className='card'>
          <h2>Web Development</h2>
          <img src={homeimg} alt="services1" className='serviceImg' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aspernatur.</p>
          <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/about" className="information">Get Information</NavLink>
          </div>
        </div>
        </div>
        <div className='card'>
          <h2>Web Development</h2>
          <img src={homeimg} alt="services1" className='serviceImg' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aspernatur.</p>
          <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/about" className="information">Get Information</NavLink>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Services
