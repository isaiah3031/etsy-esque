import { render } from '@testing-library/react'
import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { fetchProductsByKeyword } from '../util/product_api_util'
import SmallProductDisplayContainer from './products/small_product_display_container'
import { categories } from '../constants/categories.js'

const Homepage = ({fetchProductsByKeyword, products, history, currentUser, cart, receiveCart}, props) => {
  useEffect(() => {
    // Object.keys(categories).map(category => fetchProductsByKeyword(category))
    fetchProductsByKeyword('shoe')
  }, [])

  return (
    Object.values(products).map(product => 
      <SmallProductDisplayContainer product={product} />
    )
  )
}

export default withRouter(Homepage)