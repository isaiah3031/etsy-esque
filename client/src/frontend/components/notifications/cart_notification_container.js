import { connect } from 'react-redux'
import CartNotification from './cart_notification'

const mapStateToProps = (state) => ({
  notification: state.ui.cartAnimation
})

const CartNotificationContainer = connect(
  mapStateToProps,
  null
)(CartNotification)

export default CartNotificationContainer
