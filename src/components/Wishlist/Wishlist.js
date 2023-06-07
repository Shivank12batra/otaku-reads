import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import { useData } from '../../context/data/DataContext';
import { addToCart, removeFromWishlist } from '../../services';
import { isProductInCart } from '../../utils/cartUtils';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Wishlist.css';

const Wishlist = () => {
  const navigate = useNavigate()
  const {token} = useAuth()
  const {dataDispatch, cart, wishlist } = useData()
  const [disableBtn, setDisableBtn] = useState(false)

  const addToCartHandler = (_id, product) => {
    token 
    ? isProductInCart(cart, _id)
      ? navigate('/cart')
      : addToCart(dataDispatch, product, token, toast, setDisableBtn)
    : navigate('/login')
  }

  const removeFromWishlistHandler = (_id) => {
    token ? 
    removeFromWishlist(_id, dataDispatch, token, toast)
    : navigate('/login')
  }

  return (
    <div className='wishlist-container'>
      <ToastContainer/>
      {wishlist.length > 0 ? (
        <ul className='card-container'>
          {wishlist.map((product) => {
            const {_id, img, name, author, price, originalPrice, isBestSeller, category, rating} = product
            const discount = Math.ceil(((originalPrice - price)/originalPrice * 100))
            return (
              <li key={_id} className='custom-card-container'>
                <FaTrash className='delete-icon'
                onClick={() => removeFromWishlistHandler(_id)}/>
                <div className='img-container'>
                  <img src={img} alt={name} className="custom-product-img" />
                  {isBestSeller && (
                  <div className="custom-best-seller">
                    <span className="custom-best-seller-text">Best Seller</span>
                  </div>
                  )}
                </div>

                <div className='custom-product-details'>
                  <h2 className='custom-product-header'>{name}</h2>
                  <div className="custom-product-rating">
                    {[...Array(rating)].map((_, index) => (
                      <BsStarFill className="custom-star filled" key={index} />
                    ))}
                    {[...Array(5 - rating)].map((_, index) => (
                      <BsStar className="custom-star" key={index} />
                    ))}
                  </div>

                  <div className="custom-product-price">
                  <span className="custom-current-price">₹{price}</span>
                  <span className="custom-original-price">₹{originalPrice}</span>
                  <span className="custom-discount">({discount}% OFF)</span>
                </div>

                <hr className="custom-divider" />

                <div className="custom-product-info">
                  <div className='info-container'>
                  <span><strong>Author:</strong></span>
                  <p className='info'>{author}</p>
                  </div>
                  <div className='info-container'>
                    <span><strong>Category:</strong></span>
                    <p className='info'>{category}</p>
                  </div>
                  <div className='info-container'>
                    <span><strong>Binding:</strong></span>
                    <p className='info'>Hard Cover</p>
                  </div>
                  <div className='info-container'>
                    <span><strong>Language:</strong></span>
                    <p className='info'>English</p>
                  </div>
                </div>
                <div className='btn-wrapper'>
                  <button className={`${disableBtn} wishlist-cart-btn`} onClick={() => addToCartHandler(_id, product)}>
                    {isProductInCart(cart, _id) ? 'Already In Cart': 'Go To Cart'}
                </button>
                </div>
               </div>
              </li>
            )
          })}
        </ul>
      ) : <div className='empty-wishlist'>
          <h2>Wishlist Is Empty!</h2>
        </div>}
    </div>
  )
}

export default Wishlist