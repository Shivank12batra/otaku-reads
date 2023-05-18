import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer className='footer-class'>
            <h3 className='footer-header'>Contact Info</h3>
            <ul className='media-icons'>
            <li className='media-icon'><a href='https://github.com/Shivank12batra'><FaGithub/></a></li>
            <li className='media-icon'><a href='https://twitter.com/shvnk_12'><FaTwitter/></a></li>
            <li className='media-icon'><a href='https://www.linkedin.com/in/shivank-batra-4594b9202/'><FaLinkedin/></a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer