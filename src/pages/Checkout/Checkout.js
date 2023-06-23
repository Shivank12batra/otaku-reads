import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import { useData } from '../../context/data/DataContext';
import { getPriceDetails } from '../../utils';
import { clearCart } from '../../services';
import { toast, ToastContainer } from 'react-toastify';
import naruto from '../../assets/naruto.jpg';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';

export const Checkout = () => {
  const navigate = useNavigate()
  const {token} = useAuth()
  const {dataDispatch, cart, address} = useData()
  const priceObj = getPriceDetails(cart)
  const [orderAddress, setOrderAddress] = useState(address.length > 0 ? address[0] : null)
  const {price: totalPrice , discount: totalDiscount} = priceObj

  const loadScript = async(url) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = url

      script.onload = () => {
        resolve(true)
      }

      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const displayRazorpay = async() => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      toast.error('Razorpay SDK failed to load, check your connection', {
        className: 'toast-error',
        progressClassName: 'toast-progress',
      })
      return 
    }
    const options = {
      key: "rzp_test_4Os4vYkumFpDhp",
      key_secret: "PjnvnFzlrvjetX0FjWkstpKH",
      amount: Number(totalPrice - totalDiscount) * 100,
      currency: "INR",
      name: "Otaku Reads",
      description: "Thank you for shopping with us",
      image: {naruto},
      handler: function (response) {
        toast.success('Payment Made Successfully!', {
          className: 'toast-success',
          progressClassName: 'toast-progress',
        })
        clearCart(dataDispatch, cart, token);
        setTimeout(() => navigate('/profile'), 3000)
      },
      prefill: {
        name: 'Shivank Batra',
        email: 'Shivank56batra@gmail.com',
        contact: '9968280784'
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#007bb5",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }



  const checkoutHandler = () => {
    if (!orderAddress) {
      toast.error('Please select an address!', {
        className: 'toast-error',
        progressClassName: 'toast-progress',
    })
    setTimeout(() => navigate('/profile'), 3000)
    } else {
      displayRazorpay()
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
                <span>{orderAddress.name.toUpperCase()},</span>
                <span>{orderAddress.block}, </span>
                <span>{orderAddress.region}, </span>
                <span>{orderAddress.state}</span>
              </div> : 
              <div className='no-address-text'>
                Please select an address!
              </div>}
            </div>
            <button className="checkout-button" onClick={checkoutHandler}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}