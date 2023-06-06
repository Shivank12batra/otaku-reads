import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { ACTION_TYPE } from '../../utils/constant';
import { useData } from '../../context/data/DataContext';
import './Filters.css';

const Filters = () => {
  const {
    dataDispatch,
    sortBy,
    priceRange,
    category,
    filterByRating,
    setShowFilters,
    products
  } = useData();

  console.log(category)

  const changeInputHandler = (typeOfDispatch, typeOfAction, e) => {
    console.log(typeOfAction)
    dataDispatch({
        type: typeOfDispatch,
        payload: typeOfDispatch === 'CATEGORY' ?
        {...category, [typeOfAction] : !category[typeOfAction]} : typeOfAction
    })
  }

  return (
    <div className='filter-container'>
        <div className='header-container'>
          <h3 className='filters-header'>Filters</h3>
          <span className='clear-filter' onClick={() => changeInputHandler(ACTION_TYPE.CLEAR_FILTER, products)}>Clear</span>
        </div>
        <div className='price-slider'>
            <h3 for="slider">Price</h3>
            <span>50</span>
            <input 
            type="range"
            name="rangeInput"
            min="50"
            max="500"
            value={priceRange}
            onChange={(e) => changeInputHandler(ACTION_TYPE.PRICE_RANGE, e.target.value, e)}
            id="slider"
            />
            <span>500</span>
        </div>
        <div className='category-filter'>
            <h3>Category</h3>
            <div className='option'>
                <input type="checkbox"
                 id="shounen"
                 checked={category['Shounen']}
                 onClick={(e) => changeInputHandler(ACTION_TYPE.CATEGORY, 'Shounen', e)}/>
                <label for="shounen">Shounen</label>
            </div>
            <div className='option'>
                <input type="checkbox"
                 id="seinen"
                 checked={category['Seinen']}
                 onClick={(e) => changeInputHandler(ACTION_TYPE.CATEGORY, 'Seinen', e)}/>
                <label for="seinen">Seinen</label>
            </div>
            <div>
                <input type="checkbox"
                 id="shoujo"
                 checked={category['Shoujo']}
                 onClick={(e) => changeInputHandler(ACTION_TYPE.CATEGORY, 'Shoujo', e)}/>
                <label for="shoujo">Shoujo</label>
            </div>
        </div>
        <div>
        <h3>Sort By</h3>
        <div className='empty-radiobox'>
          <input type="radio"
                id="option1"
                name="options"
                checked={sortBy === ''}
                onClick={(e) => changeInputHandler(ACTION_TYPE.SORT_BY, '', e)}/>
        </div>
        <div>
            <input type="radio"
             id="option3"
              name="options"
              value={sortBy === 'LOW_TO_HIGH'}
              onClick={(e) => changeInputHandler(ACTION_TYPE.SORT_BY, 'LOW_TO_HIGH', e)}/>
            <label for="option1">Low To High</label>
        </div>
        <div>
            <input type="radio"
             id="option2"
              name="options"
              value={sortBy === 'HIGH_TO_LOW'}
              onClick={(e) => changeInputHandler(ACTION_TYPE.SORT_BY, 'HIGH_TO_LOW', e)}/>
            <label for="option2">High To Low</label>
        </div>
        </div>
        <div>
            <h3>Ratings</h3>
            <div className='filter-ratings'>
              {[...Array(filterByRating)].map((_, index) => (
                    <BsStarFill className="fa fa-star filled" key={index} onClick={(e) => changeInputHandler(ACTION_TYPE.FILTER_BY_RATING, index + 1, e)}/>
                  ))}
                  {[...Array(5 - filterByRating)].map((_, index) => (
                    <BsStar className="fa fa-star" key={index} onClick={(e) => changeInputHandler(ACTION_TYPE.FILTER_BY_RATING, filterByRating + index+1, e)}/>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Filters