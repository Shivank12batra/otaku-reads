import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useData } from '../../context/data/DataContext';
import { getPriceDetails } from '../../utils';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';

export const Checkout = () => {
  const navigate = useNavigate()
  const {cart, address} = useData()
  const priceObj = getPriceDetails(cart)
  const [orderAddress, setOrderAddress] = useState(address.length > 0 ? address[0] : null)
  const {price: totalPrice , discount: totalDiscount} = priceObj

  const checkoutHandler = () => {
    if (!orderAddress) {
      toast.error('Please select an address!', {
        className: 'toast-error',
        progressClassName: 'toast-progress',
    })
    setTimeout(() => navigate('/profile'), 3000)
    }
  }

  return (
    <div className='checkout-container'>
      <ToastContainer/> 
      <h2 className='checkout-header'>CHECKOUT</h2>
      <div className='address-checkout-division'>
        <ul className='addresses-container'>
          <h2>Select Address</h2>
          {address.map(location => {
            const {id, name, block, region, state, phoneNumber} = location
            return (
              <li key={id}
               className={`${orderAddress === location ? 'current-selected' : ''} address`}
               onClick={() => setOrderAddress(location)}>
                  <h2>{name}</h2>
                  <p>Block: {block},</p>
                  <p>Region: {region},</p>
                  <p>State: {state},</p>
                  <p>Phone no: {phoneNumber}</p>
              </li>
            )
          })}
        </ul>
        <div className='order-container'>
          <div className='order-card-container'>
            <h2 className="order-heading">ORDER DETAILS</h2>
            <div className="divider"></div>
            <div className="order-details">
              <div className="order-line">
                <span className="order-label">Item</span>
                <span className="order-value qty">Qty</span>
              </div>
              {cart.map(product => {
                return (
                  <div className='order-line'>
                    <span className='order-label'>{product.name}</span>
                    <span className='order-value'>{product.qty}</span>
                  </div>
                )
              })}
              <div className="item-price-divider"></div>
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
                <span className="order-value total-amt">{totalPrice - totalDiscount}</span>
              </div>
              <div className='thick-line'></div>
            </div>
            <div className="divider"></div>
            <div className='address-message'>
              <h3>Deliver To:</h3>
              {orderAddress ?
               <div className='address-text'>
                <span>{orderAddress.name.toUpperCase()}, </span>
                <span>{orderAddress.block}, </span>
                <span>{orderAddress.region}, </span>
                <span>{orderAddress.state}</span>
              </div> : 
              <div className='no-address-text'>
                Please select an address!
              </div>}
            </div>
            <button className="checkout-button" onClick={checkoutHandler}
            >Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}