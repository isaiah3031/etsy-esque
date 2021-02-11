import React, { useEffect } from 'react'

const ProductReview = ({fetchReviews, reviews, productId}) => {
  useEffect(() => {
    fetchReviews(productId)
  }, [])
  
  try {
    debugger
    return (
      reviews[productId].map(review => <p>{review.ReviewText}</p>)
    )
  } catch (error) {
    return null
  }
}

export default ProductReview