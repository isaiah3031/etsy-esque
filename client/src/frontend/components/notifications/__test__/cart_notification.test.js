import React from 'react'
import reactDom from 'react-dom';
import CartNotificationContainer from '../cart_notification_container'
import CartNotification from '../cart_notification'
import { render, fireEvent, screen } from '../../../../test-utils'
import * as types from '../../../constants/action_types'

// import reactDOM from 'react-dom'

const createState = (notification) => ({
  initialState: {
    ui: {
      cartAnimation: notification
    }
  }
})

it("renders without crashing", () => {
  render(<CartNotificationContainer />, createState(''))
  expect(screen.getByTestId("cart-notification")).toBeInTheDocument()
})

it("returns undefined when not passed a notification", () => {
  const tree = render(<CartNotification notification={null} />)
  expect(tree.getByTestId('cart-notification')).toBeInTheDocument()
})

it("renders 'Removed from your cart' when passed a REMOVE_FROM_CART", () => {
  const tree = render(<CartNotification notification={types.REMOVE_FROM_CART} />)
  expect(tree.getByText("Removed from your cart")).toBeInTheDocument()
})

it("renders 'Added to your cart' when passed a REMOVE_FROM_CART", () => {
  const tree = render(<CartNotification notification={types.ADD_TO_CART} />)
  expect(tree.getByText("Added to your cart")).toBeInTheDocument()
})