import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ _id, img, name, author, price, originalPrice, isBestSeller, isSoldOut, rating }) => {
    const discount = Math.ceil(((originalPrice - price)/originalPrice * 100))
    return (
        !isSoldOut ? (
          <li key={_id} className='product-card'>
            <Link to={`/products/${_id}`} className='product-link'>
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
                  <button className="cart-button">Add to Cart</button>
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
                <button className="cart-button">Add to Cart</button>
            </div>
              <span className="sold-out">Out of Stock</span>
          </div>
      </li>
        )
      )
}

export default ProductCard