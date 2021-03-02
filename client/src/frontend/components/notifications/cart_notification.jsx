import React from 'react'
import * as types from '../../constants/action_types'
import '../../../stylesheets/cart-notification.scss'

const CartNotification = ({cartAnimation}) => {
  const notificationText = () => {
    switch (cartAnimation) {
      case types.ADD_TO_CART:
        return 'Added to your cart'
      case types.REMOVE_FROM_CART:
        return 'Removed from your cart'
      default: return ''
    }
  }
  
  if (notificationText() != '') {
    return (
      <div className='cart-notification'>
        <h2>{notificationText()}</h2>
      </div>
    )
  } else {
    return null
  }
}

export default CartNotification