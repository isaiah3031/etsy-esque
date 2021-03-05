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
    <h1 data-testid='user-options' 
      className='user-options'>
      Welcome, {currentUser.username}!
      <button onClick={() => logout()}>Logout</button>
    </h1>

  const guestUser = () =>
    <div data-testid='user-options'
      className='user-options'>
      <h2>Welcome, Guest!</h2>
      <section>
        <button onClick={() => history.push('/signup')}>Sign up</button>
        <button onClick={() => history.push('/login')}>Login</button>
      </section>
    </div>

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

        <div>
          <SearchContainer />
        </div>
      </section>
      <section className='header-2'>
        <div>
          {categories()}
        </div>
        <section>
          <div className='icon user-icon'>
            <img src={User} />
            {currentUser.id ? loggedInUser() : guestUser()}
          </div>
          <CartPreviewContainer />
        </section>
      </section>
    </div>
  )
}

export default Greeting;