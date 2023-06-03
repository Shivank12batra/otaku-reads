import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='spinner-container'>
        <div className='spinner'>
            <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="loading"/>
        </div>
    </div>
  )
}

export default Loader