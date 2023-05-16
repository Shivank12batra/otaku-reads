import React from 'react';
import { FaBook } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import { IoHeartOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './NavBar.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to='/' className='link'>
          <h1 className='nav-header'>Otaku Reads</h1>
        </Link>
        <div className='nav-search'>
          <form className='search-form'>
            <input type='text' name='searchProduct' placeholder='Search For Manga' />
          </form>
        </div>
        <div>
          <ul className='nav-icons'>
            <Link to='/' className='link'>
              <li>
              <FaBook size={25}/>
              </li>
            </Link>
            <Link to='/profile' className='link'>
              <li>
              <RiUserLine size={25}/>
              </li>
            </Link>
            <Link to='/wishlist' className='link'>
              <li>
              <IoHeartOutline size={25}/>
              </li>
            </Link>
            <Link to='/cart' className='link'>
              <li>
              <AiOutlineShoppingCart size={25}/>
              </li>
            </Link>
          </ul>
        </div>
    </nav>
    </div>
  )
}

export default NavBar