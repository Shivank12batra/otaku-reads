import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import { useData } from '../../context/data/DataContext';
import { addToCart, removeFromWishlist } from '../../services';
import { isProductInCart } from '../../utils/cartUtils';
import { BsStar, BsStarFill } from 'react-icons/bs'
import { FaBolt } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Wishlist.css'

const Wishlist = () => {
  const navigate = useNavigate()
  const {token} = useAuth()
  const {dataDispatch, cart, wishlist } = useData()
  const [disableBtn, setDisableBtn] = useState(false)
  return (
    <div className='wishlist-container'>
      <ToastContainer/>
      {wishlist.length > 0 ? (
        <ul>

        </ul>
      ) : <div className='empty-wishlist'>
          <h2>Wishlist Is Empty!</h2>
        </div>}
    </div>
  )
}

export default Wishlist