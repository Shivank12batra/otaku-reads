import React from 'react'
import { useData } from '../../context/data/DataContext';
import { filterData } from '../../utils';
import Loader from '../Loader/Loader';
import Filters from '../Filters/Filters';
import Error from '../Error/Error';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'

const ProductList = () => {
    const {
      showFilters,
      loading,
      error,
      products,
      sortBy,
      priceRange,
      category,
      filterByRating
      } = useData()

      const filteredProducts = filterData([...products], sortBy, priceRange, category, filterByRating)


    return (
        <div>
        {loading && <Loader/>}
          <div className='popup-container'>
           <div className={`popup ${showFilters ? 'show-filters' : ''}`}>
           <Filters/>
           </div>
          </div>
          <div className='productList-container'>
            <div className='filters'>
              <Filters/>
            </div>
            <div className='productList-container'>
             {error && <Error/>}
            </div>
            {filteredProducts.length > 0 ? (
              <div className='products-container'>
                <h1 className=''>Showing All Products</h1>
                <ul className='products'>
                  {filteredProducts.map(product => {
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