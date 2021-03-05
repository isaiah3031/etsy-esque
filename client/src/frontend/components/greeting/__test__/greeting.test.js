import React from 'react'
import reactDom from 'react-dom';
import Greeting from '../greeting'
import { render, fireEvent, screen, shallow } from '../../../../test-utils'
import * as types from '../../../constants/action_types'

it("renders without crashing", () => {
  render(<Greeting currentUser={{ username: null, id: null }} />)
  expect(screen.getByTestId("user-options")).toBeInTheDocument()
})

it("Renders 'Welcome, Guest!' and signup and login buttons if not logged in", () => {
  const tree = render(<Greeting currentUser={{ username: null, id: null }} />)
  expect(tree.getByTestId("user-options")).
    toHaveTextContent('Welcome, Guest!')
  expect(tree.getByTestId("user-options")).
    toContainHTML('<button>Sign up</button><button>Login</button>')
})

it("Renders 'Welcome, {currentUser}!' and the logout button if logged in", () => {
  const tree = render(<Greeting currentUser={{ username: 'isaiah30', id: 1 }} />)
  expect(tree.getByTestId("user-options")).toHaveTextContent('Welcome, isaiah30!')
  expect(tree.getByTestId("user-options")).toContainHTML('<button>Logout</button>')
})