import { connect } from 'react-redux'
import { fetchProduct } from '../actions/product_actions'
impor
const mapStateToProps = (state, ownProps) => ({
  product: state.entities.product[ownProps.productId]
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId))
})

const ProductDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay)

export default ProductDisplayContainer;