import React from 'react'
import * as types from '../../constants/action_types'
import '../../../stylesheets/cart-notification.scss'

const CartNotification = ({ notification }) => {
  const notificationText = () => {
    switch (notification) {
      case types.ADD_TO_CART:
        return 'Added to your cart'
      case types.REMOVE_FROM_CART:
        return 'Removed from your cart'
      default: return ''
    }
  }

  // Causes tests to fail but keeps notification sqaure from
  // appearing when not needed.
  if (notificationText() == '') return null

  return (
    <div data-testid="cart-notification" className='cart-notification'>
      <h2>{notificationText()}</h2>
    </div>
  )
}

export default CartNotification