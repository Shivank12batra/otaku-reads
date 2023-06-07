import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useData } from '../../context/data/DataContext';
import { ACTION_TYPE } from '../../utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import { IoHeartOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './NavBar.css';


const NavBar = () => {
  const {dataDispatch, searchTerm, setShowFilters} = useData();
  const location = useLocation();
  const navigate = useNavigate();
  const isProductList = location.pathname === '/products'

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/products')
    dataDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: searchTerm
    })
  }

  const inputSearch = (e) => {
    navigate('/products')
    dataDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: e.target.value?.toLowerCase()
    })
  }

  return (
    <div className='nav-container'>
      {isProductList && <GiHamburgerMenu onClick={() => setShowFilters(prev => !prev)}
       className="hamburger-icon" size={28}/>}
      <nav className='navbar'>
        <Link to='/' className='link'>
          <h1 className='nav-header'>Otaku Reads</h1>
        </Link>
        <div className='nav-search'>
          <form className='search-form' onSubmit={(e) => handleSubmit(e)}>
            <input type='text'
             name='searchProduct'
             value={searchTerm}
             placeholder='Search For Manga'
             onChange={(e) => inputSearch(e)} />
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