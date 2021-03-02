import { connect } from 'react-redux'
import SmallProductDisplay from './small_product_display'
import { addToCart, saveCart } from '../../actions/cart_actions'

const mapStateToProps = (state, ownProps) => ({
  product: ownProps.product,
  cart: state.entities.cart,
  currentUser: state.session
})

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  saveCart: cart => dispatch(saveCart(cart))
})

const SmallProductDisplayContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SmallProductDisplay)

export default SmallProductDisplayContainer