import { render } from '@testing-library/react'
import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import SmallProductDisplay from './products/small_product_display'

const Homepage = ({fetchProducts, products, history}, props) => {
  useEffect(() => {
    fetchProducts()
  }, [])
  
  const handleClick = (e) => {
    history.push(`/product/${e.target.id}`)
  }
  if (!products[0]) return null
  
  return (
      Object.values(products).map(product => <p id={product.listing_id} onClick={(e) => handleClick(e)}>{product.title}</p>)
    )
  

}

export default withRouter(Homepage)