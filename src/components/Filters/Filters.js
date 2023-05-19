import React from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs';
import './Filters.css';

const Filters = () => {
  return (
    <div className='filter-container'>
        <h3 className='filters-header'>Filters</h3>
        <span className='clear-filter'>Clear</span>
        <div className='price-slider'>
            <label for="slider">Price</label>
            <span>50</span>
            <input type="range" min="50" max="500" id="slider"/>
            <span>500</span>
        </div>
        <div className='category-filter'>
            <h3>Category</h3>
            <div className='option'>
                <input type="checkbox" id="shounen"/>
                <label for="shounen">Shounen</label>
            </div>
            <div className='option'>
                <input type="checkbox" id="seinen"/>
                <label for="seinen">Seinen</label>
            </div>
            <div>
                <input type="checkbox" id="shoujo"/>
                <label for="shoujo">Shoujo</label>
            </div>
        </div>
        <div>
        <h3>Sort By</h3>
        <div>
            <input type="radio" id="option1" name="options"/>
            <label for="option1">Low To High</label>
        </div>
        <div>
            <input type="radio" id="option2" name="options"/>
            <label for="option2">High To Low</label>
        </div>
        </div>
        <div>
            <h3>Ratings</h3>
            <span><BsStar/></span>
            <span><BsStar/></span>
            <span><BsStar/></span>
            <span><BsStar/></span>
            <span><BsStar/></span>
        </div>
    </div>
  )
}

export default Filters