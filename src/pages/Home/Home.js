import React from 'react'
import Loader from '../../components/Loader/Loader'
import { useData } from '../../context/data/DataContext'
import Carousel from './components/Carousel/Carousel'
import Category from './components/Category/Category'

export const Home = () => {
  const {loading} = useData()
  return (
    <div>
        {loading && <Loader/>}
        <Carousel/>
        <Category/>
    </div>
  )
}