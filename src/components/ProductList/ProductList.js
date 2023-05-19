import React, {useState, useEffect} from 'react'
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
            {products.length > 0 ? <div className='products'>
                {products.map(({id, img, name, author, price, originalPrice, isBestSeller, category, rating}) => {
                    return (
                        <li key={id} className='product-card'>
                            <img src={img} alt={name}/>
                            <span>{name}</span>
                            <span>{author}</span>
                            <span>{price}</span>
                            <span>{originalPrice}</span>                            
                            <span>{isBestSeller}</span>
                            <span>{category}</span>                 
                            <span>{rating}</span>
                        </li>
                    )
                })}
            </div> : null}
        </div>
    </div>
  )
}

export default ProductList