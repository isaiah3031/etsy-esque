import React from 'react'
import reactDom from 'react-dom';
import GreetingContainer from '../greeting_container'
import { render, fireEvent, screen } from '../../../../test-utils'
import * as types from '../../../constants/action_types'

const emptyState = () => {
  initialState: {
    entities: {
      session: ''
    }
  }
}

const loggedInState = () => {
  initialState: {
    entities: {
      session: {
        username: 'isaiah30'
      }
    }
  }
}
it("renders without crashing", () => {
  render(<GreetingContainer/>, emptyState())
  expect(screen.getByTestId("greeting_container")).toBeInTheDocument()
})

// it("renders the username if user is logged in", () => {
//   // render(<GreetingContainer/>, loggedInState())
//   // expect(screen.getByText("isaiah30")).toBeInTheDocument()
// })