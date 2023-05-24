import React, {useState, useEffect} from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Filters from '../Filters/Filters'
import './ProductList.css'

const ProductList = () => {
    const [products, setProducts] = useState([])
    
    const fetchData = async() => {
        const res = await fetch('/api/products')
        const data = await res.json()
        setProducts(data.products)
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <div>
          <div className='product-container'>
            <div className='filters'>
              <Filters/>
            </div>
            {products.length > 0 ? (
              <div className='products-container'>
                <h1 className=''>Showing All Products</h1>
                <ul className='products'>
                  {products.map(({ _id, img, name, author, price, originalPrice, isBestSeller, isSoldOut, rating }) => {
                    return (
                      <li key={_id} className={`product-card ${isSoldOut ? 'out-of-stock' : ''}`}>
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
                              <span className="current-price">${price}</span>
                              <span className="original-price">${originalPrice}</span>
                              <span className="discount">({originalPrice - price}% OFF)</span>
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
                            {isSoldOut ? (
                              <span className="sold-out">Out of Stock</span>
                            ) : (
                                null
                            )}
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      );
      
}

export default ProductList