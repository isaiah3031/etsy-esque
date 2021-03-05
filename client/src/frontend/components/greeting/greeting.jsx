import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CartPreviewContainer from '../cart/cart_preview_container'
import '../../../stylesheets/header-container.scss'
import Cart from '../../../images/store-cart.png'
import Hamburger from '../../../images/store-hamburger.png'
import Store from '../../../images/store-store.png'
import SearchContainer from '../search/search_container'

const Greeting = ({ currentUser, logout }) => {
  const history = useHistory()
  const [sideMenuIsVisible, toggleSideMenu] = useState(false)
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
    
    return <ul className={`category-menu ${sideMenuIsVisible && ' hidden'}`}>
      {categories.map((category, index) =>
        <li className='category-item'
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
    <div className='nav-container'>
      <section className='nav-top-layer'>
        <img className='icon' src={Store} onClick={() => history.push('/')} />
        <img className='icon' src={Hamburger} onClick={() => toggleSideMenu(!sideMenuIsVisible)} />

        {categories()}
      </section>
      <section className='nav-bottom-layer'>
        <SearchContainer />
        <section>
          {currentUser.id ? loggedInUser() : guestUser()}
          <CartPreviewContainer />
        </section>
      </section>
    </div>
  )
}

export default Greeting;