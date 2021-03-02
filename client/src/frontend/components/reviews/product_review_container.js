import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/review_actions'
import ProductReview from './product_review'

const mapStateToProps = (state, ownProps) => ({
  reviews: state.entities.reviews,
  productId: ownProps.productId
})

const mapDispatchToProps = dispatch => ({
  fetchReviews: (productId) => dispatch(fetchReviews(productId))
})

const ProductReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductReview)

export default ProductReviewContainer;