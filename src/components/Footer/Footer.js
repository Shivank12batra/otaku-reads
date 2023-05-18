import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer className='footer-class'>
            <h3 className='footer-header'>Contact Info</h3>
            <ul className='media-icons'>
            <li className='media-icon'><a href=''><FaGithub/></a></li>
            <li className='media-icon'><a href=''><FaTwitter/></a></li>
            <li className='media-icon'><a href=''><FaLinkedin/></a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer