import React from 'react'
import { useAuth } from '../../context/auth/AuthContext'
import { useData } from '../../context/data/DataContext'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
  const {id} = useParams()
  const {token} = useAuth()
  const {products} = useData()
  console.log(id)

  const product = products.find((product) => product._id === parseInt(id))
  console.log(product)

  if (!product) return <div>Product with {id} not found!</div>

  return (
    <div>
      <h2>{product.category}</h2>
    </div>
  )
}

export default ProductDetail