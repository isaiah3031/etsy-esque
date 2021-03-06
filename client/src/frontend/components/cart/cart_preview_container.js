import { connect } from 'react-redux'
import { receiveCart, removeFromCart, saveCart } from '../../actions/cart_actions'
import { fetchProduct } from '../../actions/product_actions'
import CartPreview from './cart_preview'

const mapStateToProps = (state, ownProps) => ({
  cart: state.entities.cart,
  currentUser: state.session,
  products: state.entities.products,
  cartAnimation: state.ui.cartAnimation,
  hidden: ownProps.hidden
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: itemId => dispatch(removeFromCart(itemId)),
  receiveCart: (userId, cart) => dispatch(receiveCart(userId, cart)),
  saveCart: (userId, cart) => dispatch(saveCart(userId, cart)),
  fetchProduct: itemId => dispatch(fetchProduct(itemId)),
})

const CartPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPreview)

export default CartPreviewContainer