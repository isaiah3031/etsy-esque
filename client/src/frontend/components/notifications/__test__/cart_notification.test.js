import React from 'react'
import reactDom from 'react-dom';
import CartNotificationContainer from '../cart_notification_container'
import { render, fireEvent, screen } from '../../../../test-utils'
import * as types from '../../../constants/action_types'

// import reactDOM from 'react-dom'

const createState = (notification) => {
  state: {
    ui: {
      cartAnimation: notification
    }
  }
}

it("renders without crashing", () => {
  render(<CartNotificationContainer/>, createState(''))
  expect(screen.getByTestId("cart-notification")).toBeInTheDocument()
})

it("returns undefined when not passed a notification", () => {
  render(<CartNotificationContainer/>, createState(''))
  expect(screen.getByTestId("cart-notification").value).toBe(undefined)
})


it("renders notification text when passed a string", () => {
  render(<CartNotificationContainer/>, createState(types.ADD_TO_CART))
  expect(screen.getByText('Added to your cart')).toBeInTheDocument()
})

it("matches snapshot", () => {
  const tree = render(<CartNotificationContainer/>, createState(types.ADD_TO_CART))
  expect(tree).toMatchSnapshot()
})