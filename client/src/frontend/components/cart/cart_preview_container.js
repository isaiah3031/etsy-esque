import { connect } from 'react-redux'
import {addToCart, removeFromCart} from '../../actions/cart_actions'
import CartPreview from './cart_preview'

const mapStateToProps = state => ({
  cart: state.entities.cart
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: itemId => dispatch(removeFromCart(itemId))
})

const CartPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPreview)

export default CartPreviewContainer