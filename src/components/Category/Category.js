import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../../context/data/DataContext'
import './Category.css'

const Category = () => {
  const {categories} = useData()

  return (
    <div className='category-container'>
        <h1 className='category-header'>Categories</h1>
        {categories.length > 0 ? <div className='categories'>
            {categories.map(({id, img, categoryName, description}) => {
                return (
                    <Link to='/products' key={id} className='category-card'>
                        <img src={img} alt={categoryName}/>
                        <h2>{categoryName}</h2>
                        <p>{description}</p>
                    </Link>
                )
            })}
        </div> : null}
    </div>
  )
}

export default Category