import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/product_actions'
import ProductDisplay from './product_display'

const mapStateToProps = (state) => ({
  products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId))
})

const ProductDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay)

export default ProductDisplayContainer;