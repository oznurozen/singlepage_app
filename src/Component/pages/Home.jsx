import React from 'react'
import { NavLink } from 'react-router-dom'
import homeimg from '../../Images/homeimg.jpg'

const Home = () => {
  return (
    <div className='mainSection'>
      <div className='contentBox'>
        <h1>Learning made easy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta deleniti sequi voluptatibus harum, consectetur ex at assumenda quae omnis?</p>
        <div className='btnBox'>
          <div className='btn'>
            <NavLink to="/about" className="readMore">
              Read About
            </NavLink>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
          <img src={homeimg} alt='home'/>
      </div>
      
    </div>
  )
}

export default Home
