import React from 'react'
import { useData } from '../../context/data/DataContext';
import Filters from '../Filters/Filters'
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'

const ProductList = () => {
    const {showFilters, products} = useData()


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