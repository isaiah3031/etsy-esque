import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import CartPreviewContainer from '../cart/cart_preview_container'
import '../../../stylesheets/header-container.scss'
import Cart from '../../../images/store-cart.png'
import User from '../../../images/store-user.png'
import Store from '../../../images/store-store.png'
import SearchContainer from '../search/search_container'

const Greeting = ({ currentUser, logout }) => {
  const history = useHistory()
  const loggedInUser = () =>
    <>
      <h1 data-testid='greeting-msg'>
        Welcome, {currentUser.username}!
      </h1>
      <button data-testid='user-options'
        onClick={() => logout()}>
        Logout
      </button>
    </>

  const guestUser = () =>
    <>
      <h1 data-testid='greeting-msg'>
        Welcome, Guest!
      </h1>
      <button data-testid='user-options'
        onClick={() => history.push('/login')}>
        Login
      </button>
    </>

  const categories = () => {
    const categories = ['clothes', 'furniture', 'electronics', 'plants']
    return <ul>
      {categories.map((category, index) =>
        <li className='category'
          key={index}
          onClick={() => {
            history.push(`/search/${category}%20at%20target`)
            history.go()
          }
          }>{category}</li>
      )}
    </ul>
  }

  return (
    <div className='header-container'>
      <section className='header-1'>
        <div className='home' onClick={() => history.push('/')}>
          <img src={Store} />
          <h1 className='logo'>Store</h1>
        </div>
        <SearchContainer />
      </section>
      <section className='header-2'>
        {categories()}
        <section>
          {currentUser.id ? loggedInUser() : guestUser()}
          <CartPreviewContainer />
        </section>
      </section>
    </div>
  )
}

export default Greeting;