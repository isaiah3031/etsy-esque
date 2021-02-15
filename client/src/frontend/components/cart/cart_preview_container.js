import { connect } from 'react-redux'
import { receiveCart, removeFromCart, saveCart } from '../../actions/cart_actions'
import { fetchProduct } from '../../actions/product_actions'
import CartPreview from './cart_preview'

const mapStateToProps = state => ({
  cart: state.entities.cart,
  currentUser: state.session,
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: itemId => dispatch(removeFromCart(itemId)),
  receiveCart: (userId, cart) => dispatch(receiveCart(userId, cart)),
  saveCart: (userId, cart) => dispatch(saveCart(userId, cart)),
  fetchProduct: itemId => dispatch(fetchProduct(itemId))
})

const CartPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPreview)

export default CartPreviewContainer