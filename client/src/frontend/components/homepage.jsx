import { render } from '@testing-library/react'
import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { fetchProductsByKeyword } from '../util/product_api_util'
import SmallProductDisplay from './products/small_product_display'
import { categories } from '../constants/categories.js'

const Homepage = ({fetchProductsByKeyword, products, history}, props) => {
  useEffect(() => {
    Object.keys(categories).map(category => fetchProductsByKeyword(category))
  }, [])
  
  const handleClick = (e) => {
    history.push(`/product/${e.target.id}`)
  }

  return (
    Object.values(products).map(product => 
      <SmallProductDisplay product={product} />
    )
  )
}

export default withRouter(Homepage)