import React, {useState} from 'react';
import { useData } from '../../../../context/data/DataContext';
import { filterData, searchData } from '../../../../utils';
import Loader from '../../../../components/Loader/Loader';
import Filters from '../Filters/Filters';
import Error from '../../../../components/Error/Error';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

export const ProductList = () => {
    const {
      showFilters,
      loading,
      error,
      products,
      sortBy,
      priceRange,
      category,
      filterByRating,
      searchTerm
      } = useData()
      const [page, setPage] = useState(1)

      const data = filterData([...products], sortBy, priceRange, category, filterByRating)
      const filteredProducts = searchData([...data], searchTerm)

      const selectPage = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= Math.ceil(filteredProducts.length/10) && selectedPage !== page) {
          setPage(selectedPage)
        }
      }


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
                <h2 className='products-header'>Showing All Products <span>({filteredProducts.length} products)</span></h2>
                <ul className='products'>
                  {filteredProducts.slice((Math.ceil(filteredProducts.length/3))*(page-1), page *10).map(product => {
                    console.log()
                    return (
                      <ProductCard key={product._id} product={product}/>
                    )
                  })}
                </ul>
                <div className='pagination'>
                  <span onClick={() => setPage((prev) => prev-1)} className={page === 1 ? 'disable_page_button' : ""}>◀</span>
                  {[...Array(Math.ceil(filteredProducts.length/10))].map((_, i) => {
                    return (
                      <span key={i} className={page === i + 1 ? 'selected_page' : ""} onClick={() => selectPage(i+1)}>{i+1}</span>
                    )
                  })}
                  <span onClick={() => setPage((next) => next+1)} className={page === Math.ceil(filteredProducts.length/10) ? 'disable_page_button' : ""}>▶</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
      
}