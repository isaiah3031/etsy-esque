import { connect } from 'react-redux'
import { receiveCart, removeFromCart, saveCart } from '../../actions/cart_actions'
import { fetchProduct } from '../../actions/product_actions'
import CartItem from './cart_item'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session,
  item: ownProps.item
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: itemId => dispatch(removeFromCart(itemId)),
  receiveCart: (userId, cart) => dispatch(receiveCart(userId, cart)),
  saveCart: (userId, cart) => dispatch(saveCart(userId, cart)),
  fetchProduct: itemId => dispatch(fetchProduct(itemId))
})

const CartItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem)

export default CartItemContainer