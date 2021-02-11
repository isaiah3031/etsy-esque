import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import ProductReviewContainer from '../reviews/product_review'

const ProductDisplay = ({ fetchProduct, products, match }) => {
  const productId = parseInt(match.params.productId)
  useEffect(() => {
    products[productId] || fetchProduct(productId)
  }, []);
  
  try {
    const product = products[productId]
    
    return (
      <>
        <div>
          <p>{product.title}</p>
          <img src={`${product.images[0].base_url}${product.images[0].primary}`} />
          <p>{product.price.formatted_current_price}</p>
        </div>
        <ProductReviewContainer productId={productId} />
      </>
    )
  } catch (error) {
    return null
  }

}

export default withRouter(ProductDisplay)