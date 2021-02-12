import { connect } from 'react-redux'
import SmallProductDisplay from './small_product_display'
import { addToCart } from '../../actions/cart_actions'

const mapStateToProps = (state, ownProps) => ({
  product: ownProps.product
})

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
})

const SmallProductDisplayContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SmallProductDisplay)

export default SmallProductDisplayContainer