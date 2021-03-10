import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { fetchProduct } from '../../util/product_api_util'
import SmallProductDisplayContainer from '../products/small_product_display_container'


const SearchResults = ({ results, fetchProductsByKeyword }) => {
  const history = useHistory()
  const params = history.location.pathname.split('/')[2]
  useEffect(() => {
    fetchProductsByKeyword(params)
  }, [])

  try {
    return (
      <div className='vertical-lists'>
        {Object.values(results).map(product =>
          <SmallProductDisplayContainer product={product} />
        )}
      </div>
    )
  } catch (error) {
    return null
  }

}

export default SearchResults