import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = () => {
    const [categories, setCategories] = useState([])

    const fetchData = async() => {
        const res = await fetch('/api/categories')
        const data = await res.json()
        setCategories(data.categories)
    }

    useEffect(() => {
        fetchData()
    }, [])

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