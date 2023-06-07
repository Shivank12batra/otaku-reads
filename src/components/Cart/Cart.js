import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import { useData } from '../../context/data/DataContext';
import { addToWishlist, removeFromCart, clearCart, increaseQtyFromCart } from '../../services';
import { isProductInWishlist, getPriceDetails} from '../../utils';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate()
  const {token} = useAuth()
  const {dataDispatch, cart, wishlist } = useData()
  const priceObj = getPriceDetails(cart)
  const {price: totalPrice , discount: totalDiscount} = priceObj

  const addToWishlistHandler = (_id, product) => {
    token 
    ? isProductInWishlist(wishlist, _id)
      ? navigate('/wishlist')
      : addToWishlist(dataDispatch, product, token, toast)
    : navigate('/login')
  }

  const removeFromCartHandler = (_id) => {
    token ?
    removeFromCart(_id, dataDispatch, token, toast)
    : navigate('/login')
  }

  const quantityHandler = (_id, qty, actionType) => {
    qty === 1 && actionType === 'DEC_QTY'?
    removeFromCart(_id, dataDispatch, token, toast)
    : increaseQtyFromCart(_id, dataDispatch, token, actionType)
  }

  return (
    <div className='cart-container'>
      <ToastContainer/>
      <h2 className='cart-header'>MY CART</h2>
      {cart.length > 0 ? 
      <div className='cart-checkout-division'>
        <ul className='cart-products'>
          {cart.map(product => {
            const {_id, img, name, author, price, originalPrice, isBestSeller, category, rating, qty} = product
            const discountPerctange = Math.ceil(((originalPrice - price)/originalPrice * 100))
            return (
              <li key={_id} className='cart-card-container'>
                <FaTrash className='delete-icon'
                onClick={() => removeFromCartHandler(_id)}/>
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
                    <span className="custom-discount">({discountPerctange}% OFF)</span>
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

                  <div className='cart-page-btns'>
                    <div className='qty-buttons'>
                    <button className="decrease-qty" onClick={() => quantityHandler(_id, qty, 'DEC_QTY')}>
                         -
                      </button>
                      <span>{qty}</span>
                    <button className='increase-qty' onClick={() => quantityHandler(_id, qty, 'INC_QTY')}>
                        +
                    </button>
                    </div>
                    <button className="cart-wishlist-btn" onClick={() => addToWishlistHandler(_id, product)}>
                    {isProductInWishlist(wishlist, _id) ? 'Go To Wishlist': 'Add To Wishlist'}
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
         <button className='clear-cart-btn' onClick={() => clearCart(dataDispatch, cart, token)}>
           Clear Cart
         </button>
        </ul>
        <div className='order-container'>
          <div className='order-card-container'>
            <h2 className="order-heading">PRICE DETAILS</h2>
            <div className="divider"></div>
            <div className="order-details">
              <div className="order-line">
                <span className="order-label">Price ({cart.length} Items)</span>
                <span className="order-value">+{totalPrice}</span>
              </div>
              <div className="order-line">
                <span className="order-label">Discount</span>
                <span className="order-value">-{totalDiscount}</span>
              </div>
              <div className="order-line">
                <span className="order-label">Delivery Charges</span>
                <span className="order-value">0</span>
              </div>
              <div className='thick-line'></div>
              <div className="order-line">
                <span className="order-label">Total Amount</span>
                <span className="order-value">{totalPrice - totalDiscount}</span>
              </div>
              <div className='thick-line'></div>
            </div>
            <div className="divider"></div>
            <div className='checkout-message'>You received a total discount of {totalDiscount}</div>
            <button className="checkout-button" onClick={() => navigate('/checkout')}>Checkout</button>
          </div>
        </div>
      </div>:
      <div className='empty-cart'>
        <h2>
          Your Cart Is Empty!
        </h2>
      </div>}
    </div>
  )
}

export default Cart