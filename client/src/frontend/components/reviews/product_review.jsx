import React, { useEffect } from 'react'
import '../../../stylesheets/reviews.scss'
const ProductReview = ({fetchReviews, reviews, productId}) => {
  useEffect(() => {
    fetchReviews(productId)
  }, [])

  try {
    return <section className='review-container'>
      <h2>Reviews</h2>
      {
        reviews[productId].map(review => {
        return (
          <div className='review'>
            <h3>{review.Title}</h3>
            <p>{review.ReviewText}</p>
            <p>- {review.UserNickname}</p>
          </div>
          )
        })
      }
    )
    </section>
  } catch (error) {
    return null
  }
}

export default ProductReview