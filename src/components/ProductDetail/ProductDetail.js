import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { FaBolt } from 'react-icons/fa'
import { useAuth } from '../../context/auth/AuthContext'
import { useData } from '../../context/data/DataContext'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetail.css'


const ProductDetail = () => {
  const {id} = useParams()
  const {navigate} = useNavigate()
  const {token} = useAuth()
  const {products} = useData()

  const product = products.find((product) => product._id === parseInt(id))

  if (!product) return <div className='not-found'><h2>Product not found!</h2></div>
  const {img, name, author, price, originalPrice, isBestSeller, category, rating} = product 
  const discount = Math.ceil(((originalPrice - price)/originalPrice * 100))

  return (
    <div className='card-container'>
      <div className="custom-card-container">
        <div className='img-container'>
         <img src={img} alt={name} className="custom-product-img" />
        </div>

      <div className="custom-product-details">
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

        <div className="custom-product-icons">
          <span className="custom-icon">
            <FaBolt />
          </span>
          <span className="custom-icon-text">Fast Delivery</span>
        </div>

        <div className="custom-product-icons">
          <span className="custom-icon">
            <FaBolt />
          </span>
          <span className="custom-icon-text">Inclusive of all Taxes</span>
        </div>

        <div className="custom-product-icons">
          <span className="custom-icon">
            <FaBolt />
          </span>
          <span className="custom-icon-text">Cash on Delivery Available</span>
        </div>

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

        <div className="custom-product-buttons">
          <button className="custom-cart-btn">Add To Cart</button>
          <button className="custom-wishlist-btn">Add To Wishlist</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail