import { render } from '@testing-library/react'
import React, {useEffect} from 'react'

const Homepage = ({fetchProducts, products}, props) => {
  useEffect(() => {
    fetchProducts()
  })
  
  if (!products[0]) return null
  
  return (
      <p>{products[0].title}</p>
    )
  

}

export default Homepage