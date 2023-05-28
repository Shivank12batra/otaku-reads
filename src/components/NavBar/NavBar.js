import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import { IoHeartOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './NavBar.css';


const NavBar = () => {

  const location = useLocation();
  const isProductList = location.pathname === '/products'

  return (
    <div className='nav-container'>
      {isProductList && <GiHamburgerMenu className="hamburger-icon" size={28}/>}
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
            <Link to='/products' className='link'>
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