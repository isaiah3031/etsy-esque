import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import ProductReviewContainer from '../reviews/product_review_container'
import '../../../stylesheets/product-display.scss'

const ProductDisplay = ({ fetchProduct, products, match }) => {
  const productId = parseInt(match.params.product_id)
  useEffect(() => {
    fetchProduct(productId)
  }, []);

  const formattedTitle = (title) => {
    title = title.split(' - ')[0]
  
    return title
  }
  try {
    const product = products[productId]
    
    return (
      <>
        <div className='product-details'>
          <section className='description'>
            <h2>{formattedTitle(product.title)}</h2>
            <p>{product.description}</p>
            <p>{product.price.formatted_current_price}
              <input type='button' value='Add to Cart' />
            </p>
          </section>
          <img src={`${product.images.primaryUri}`} />
        </div>
        <ProductReviewContainer productId={productId} />
      </>
    )
  } catch (error) {
    return null
  }

}

export default withRouter(ProductDisplay)