import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import SmallProductDisplayContainer from './products/small_product_display_container'
import '../../stylesheets/vertical-lists.scss'

const Homepage = ({fetchProductsByKeyword, products}) => {
  useEffect(() => {
    fetchProductsByKeyword('electronics from target')
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