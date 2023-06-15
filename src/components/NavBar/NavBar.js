import React, {useState, useEffect, useRef} from 'react';
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
  const {dataDispatch, cart, wishlist, setLoading, setShowFilters} = useData();
  const location = useLocation();
  const navigate = useNavigate();
  const timer = useRef(null)
  const [input, setInput] = useState('')
  const isProductList = location.pathname === '/products'

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/products')
    dataDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: input
    })
  }

  useEffect(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      dataDispatch({
        type: ACTION_TYPE.SEARCH,
        payload: input
      })
      setLoading(true)
      setTimeout(() => setLoading(false), 500)
      if (input.trim().length > 0) {
        navigate("/product");
      }
    }, 500)
  }, [input])

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
             value={input}
             placeholder='Search For Manga'
             onChange={(e) => setInput(e.target.value)} />
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
              <li className='wishlist-icon'>
              <IoHeartOutline size={25}/>
              {wishlist.length > 0 && <span className='item-count'>{wishlist.length}</span>}
              </li>
            </Link>
            <Link to='/cart' className='link'>
              <li className='cart-icon'>
              <AiOutlineShoppingCart size={25}/>
              {cart.length > 0 && <span className='item-count'>{cart.length}</span>}
              </li>
            </Link>
          </ul>
        </div>
    </nav>
    </div>
  )
}

export default NavBar