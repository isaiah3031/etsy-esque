import React from 'react'
import Greeting from '../greeting'
import { render, screen } from '../../../../test-utils'

it("renders without crashing", () => {
  render(<Greeting currentUser={{ username: null, id: null }} />)
  expect(screen.getByTestId("greeting-msg")).toBeInTheDocument()
  expect(screen.getByTestId("user-options")).toBeInTheDocument()
})

it("Renders 'Welcome, Guest!' and signup and login buttons if not logged in", () => {
  const tree = render(<Greeting currentUser={{ username: null, id: null }} />)
  expect(tree.getByTestId("greeting-msg")).
    toHaveTextContent('Welcome, Guest!')
  expect(tree.getByTestId("user-options")).
    toContainHTML('<button data-testid="user-options">Login</button>')
})

it("Renders 'Welcome, {currentUser}!' and the logout button if logged in", () => {
  const tree = render(<Greeting currentUser={{ username: 'isaiah30', id: 1 }} />)
  expect(tree.getByTestId("greeting-msg")).toHaveTextContent('Welcome, isaiah30!')
  expect(tree.getByTestId("user-options")).
    toContainHTML('<button data-testid="user-options">Logout</button>')
})