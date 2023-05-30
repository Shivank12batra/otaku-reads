import React, {useState, useEffect} from 'react'
import { useData } from '../../context/data/DataContext';
import Filters from '../Filters/Filters'
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'

const ProductList = () => {
    const {showFilters} = useData()
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
            <div className={`filters ${showFilters ? 'show-filters' : ''}`}>
              <Filters/>
            </div>
            {products.length > 0 ? (
              <div className='products-container'>
                <h1 className=''>Showing All Products</h1>
                <ul className='products'>
                  {products.map(product => {
                    return (
                      <ProductCard key={product._id} {...product}/>
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