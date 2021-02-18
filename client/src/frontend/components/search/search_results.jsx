import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { fetchProduct } from '../../util/product_api_util'
import SmallProductDisplayContainer from '../products/small_product_display_container'


const SearchResults = ({results, fetchProductsByKeyword, match}) => {
  useEffect(() => {
    fetchProductsByKeyword(match.params.search_terms)
  }, [])
  
  try {
    return (
      <div className='vertical-lists'>
        {Object.values(results).map(product => 
          <SmallProductDisplayContainer product={product}
          />
        )}
      </div>
    )
  } catch (error) {
    return null  
  }

}

export default SearchResults