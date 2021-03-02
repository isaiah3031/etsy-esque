import { connect } from 'react-redux'
import CartNotification from './cart_notification'

const mapStateToProps = (state) => ({
  cartAnimation: state.ui.cartAnimation
})

const CartNotificationContainer = connect(
  mapStateToProps,
  null
)(CartNotification)

export default CartNotificationContainer