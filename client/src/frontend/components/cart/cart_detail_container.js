import { connect } from 'react-redux'
import { receiveCart, removeFromCart, saveCart } from '../../actions/cart_actions'
import { fetchProduct } from '../../actions/product_actions'
import CartDetail from './cart_detail'

const mapStateToProps = state => ({
  cart: state.entities.cart,
  currentUser: state.session,
  products: state.entities.products
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: itemId => dispatch(removeFromCart(itemId)),
  receiveCart: (userId, cart) => dispatch(receiveCart(userId, cart)),
  saveCart: (userId, cart) => dispatch(saveCart(userId, cart)),
  fetchProduct: itemId => dispatch(fetchProduct(itemId))
})

const CartDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDetail)

export default CartDetailContainer