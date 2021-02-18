import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import ProductReviewContainer from '../reviews/product_review_container'

const ProductDisplay = ({ fetchProduct, products, match }) => {
  const productId = parseInt(match.params.product_id)
  useEffect(() => {
    products[productId] || fetchProduct(productId)
  }, []);
  
  try {
    const product = products[productId]
    return (
      <>
        <div>
          <p>{product.title}</p>
          <img src={`${product.images.primaryUri}`} />
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