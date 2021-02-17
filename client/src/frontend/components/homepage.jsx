import { render } from '@testing-library/react'
import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { fetchProductsByKeyword } from '../util/product_api_util'
import SmallProductDisplayContainer from './products/small_product_display_container'
import '../../stylesheets/vertical-lists.scss'

const Homepage = ({fetchProductsByKeyword, products, history, currentUser, cart, receiveCart}, props) => {
  useEffect(() => {
    // Object.keys(categories).map(category => fetchProductsByKeyword(category))
    fetchProductsByKeyword('shoe')
  }, [])

  return (
    <div className='vertical-lists'>
      {Object.values(products).map(product => 
        <SmallProductDisplayContainer product={product} />
      )}
    </div>
  )
}

export default withRouter(Homepage)