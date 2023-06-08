import React from 'react'
import Loader from '../Loader/Loader'
import { useData } from '../../context/data/DataContext'
import Carousel from '../Carousel/Carousel'
import Category from '../Category/Category'

const Home = () => {
  const {loading} = useData()
  return (
    <div>
        {loading && <Loader/>}
        <Carousel/>
        <Category/>
    </div>
  )
}

export default Home