import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import './style.css';


const 
Footer = () => {
  return (
    <footer>
        <div className='container container-flex'>
            <div className='icons'>
                <FaLinkedin className='icon'/>
                <FaTwitterSquare className='icon'/>
                <FaInstagramSquare className='icon'/>
                <FaGithubSquare className='icon'/>
            </div>
            <div className='line'>
                <hr />
                <hr />
            </div>
            <div className='copyright'>
                <p>All rights reserved &copy;</p>
                <p>Made with Love by Khanam</p>
            </div>

        </div>
     
    </footer>
  )
}

export default Footer
