import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import { useData } from '../../context/data/DataContext';
import { addToCart, addToWishlist, removeFromWishlist } from '../../services';
import { isProductInCart, isProductInWishlist } from '../../utils/cartUtils';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const {
     _id,
     img,
     name,
     author,
     price,
     originalPrice,
     isBestSeller,
     isSoldOut,
     rating } = product

   const navigate = useNavigate()
   const {dataDispatch, cart, wishlist} = useData()
   const { token } = useAuth()
   const inCart = isProductInCart(cart, _id)
   const inWishlist = isProductInWishlist(wishlist, _id)
   const discount = Math.ceil(((originalPrice - price)/originalPrice * 100))
   const [disableBtn, setDisableBtn] = useState(true)
   const addToCartHandler = (e) => {
    e.preventDefault()
    setDisableBtn(prev => !prev)
    token 
    ? isProductInCart(cart, _id)
      ? navigate('/cart')
      : addToCart(dataDispatch, product, token, toast)
    : navigate('/login')
   }

  //  console.log(cart)
  //  console.log(wishlist)

   const addToWishlistHandler = (e) => {
    e.preventDefault()
    setDisableBtn((prev) => !prev)
    token 
    ? isProductInWishlist(wishlist, _id)
      ? removeFromWishlist(_id, dataDispatch, token, toast)
      : addToWishlist(dataDispatch, product, token, toast)
    : navigate('/login')
   }

    return (
        !isSoldOut ? (
          <li key={_id} className='product-card'>
            <ToastContainer/>
            <Link to={`/products/${_id}`} className='product-link'>
            {isBestSeller && (
              <div className="best-seller">
                <span className="best-seller-text">Best Seller</span>
              </div>
            )}
            <div className={`${isProductInWishlist(wishlist, _id) ? 'selected' : ''} heart-icon`}>
              <FaHeart onClick={addToWishlistHandler}/>
            </div>
            <div className="product-image">
              <img src={img} alt={name} />
            </div>
            <div className="product-details">
              <h3 className="product-name">{name}</h3>
              <p className="product-author">{author}</p>
              <div className="product-price">
                <span className="current-price">₹{price}</span>
                <span className="original-price">₹{originalPrice}</span>
                <span className="discount">({discount}% OFF)</span>
              </div>
              <div className="product-rating">
                {[...Array(rating)].map((_, index) => (
                  <BsStarFill className="fa fa-star filled" key={index} />
                ))}
                {[...Array(5 - rating)].map((_, index) => (
                  <BsStar className="fa fa-star" key={index} />
                ))}
              </div>
              <div>
                  <button className="cart-button" onClick={addToCartHandler}>{isProductInCart(cart, _id) ? 'Go To Cart' : 'Add To Cart'}</button>
              </div>
            </div>
            </Link>
        </li>) : (
          <li key={_id} className='product-card out-of-stock'>
          {isBestSeller && (
            <div className="best-seller">
              <span className="best-seller-text">Best Seller</span>
            </div>
          )}
          <div className="heart-icon">
            <FaHeart />
          </div>
          <div className="product-image">
            <img src={img} alt={name} />
          </div>
          <div className="product-details">
            <h3 className="product-name">{name}</h3>
            <p className="product-author">{author}</p>
            <div className="product-price">
              <span className="current-price">₹{price}</span>
              <span className="original-price">₹{originalPrice}</span>
              <span className="discount">({discount}% OFF)</span>
            </div>
            <div className="product-rating">
              {[...Array(rating)].map((_, index) => (
                <BsStarFill className="fa fa-star filled" key={index} />
              ))}
              {[...Array(5 - rating)].map((_, index) => (
                <BsStar className="fa fa-star" key={index} />
              ))}
            </div>
            <div>
                <button className="cart-button">{isProductInCart(cart, _id) ? 'Go To Cart' : 'Add To Cart'}</button>
            </div>
              <span className="sold-out">Out of Stock</span>
          </div>
      </li>
        )
      )
}

export default ProductCard