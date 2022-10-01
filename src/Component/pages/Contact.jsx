import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css';

const Contact = () => {
  return (
    <>
    <h1>Contact Page</h1>
    <form action="" className='contact'>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter your name' />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter your email' />
      </div>
      <div>
        <label htmlFor="mobile">Tel</label>
        <input type="tel" placeholder='Enter your mobile' />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea placeholder='Enter your message'></textarea>
      </div>

      <div className='btnContainer'>
          <div className='btn' >
            <NavLink to="/about" className="information">Sent</NavLink>
          </div>
      </div>
     
    </form>
      
    </>
  )
}

export default Contact
