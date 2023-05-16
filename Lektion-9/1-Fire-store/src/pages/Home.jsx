import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'
import ProductCard from '../components/productCard/ProductCard'
import { getProduct } from '../features/products/productListSlice'

const Home = () => {

const dispatch = useDispatch()

useEffect(() => {
dispatch(getProduct())
}, [])

const {products, loading, error} = useSelector(state => state.productList)
  return (
    <div>
      
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
      {
         products.map(product => <ProductCard key={product.id} product={product} />)
      }
      </div>

    </div>
  )
}

export default Home