import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CartPreviewContainer from '../cart/cart_preview_container'
import '../../../stylesheets/header-container.scss'
import User from '../../../images/store-user.png'
import Hamburger from '../../../images/store-hamburger.png'
import Store from '../../../images/store-store.png'
import Cart from '../../../images/store-cart.png'
import Search from '../../../images/store-search.png'
import SearchContainer from '../search/search_container'

const Greeting = ({ currentUser, logout }) => {
  const history = useHistory()
  const [sideMenuIsVisible, toggleSideMenu] = useState(false)
  const [choosenIcon, setIcon] = useState('none')

  const loggedInUser = () => {
    if (choosenIcon != 'user') return null
    return <div>
      <h1 data-testid='greeting-msg'>
        Welcome, {currentUser.username}!
      </h1>
      <button data-testid='user-options'
        onClick={() => logout()}>
        Logout
      </button>
    </div>
  }

  const guestUser = () => {
    if (choosenIcon != 'user') return null
    return <div>
      <h1 data-testid='greeting-msg'>
        Welcome, Guest!
      </h1>
      <button data-testid='user-options'
        onClick={() => history.push('/login')}>
        Login
      </button>
    </div>
  }
  const categories = () => {
    const categories = ['clothes', 'furniture', 'electronics', 'plants']

    return <ul className={`category-menu ${!sideMenuIsVisible && ' hidden'}`}>
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

  const handleMenuItemToggle = (e) => {
    let newSelection = e.target.parentElement.id
    if (newSelection == choosenIcon) newSelection = 'none'
    setIcon(newSelection)
  }

  return (
    <div className='nav-container'>
      <section className='nav-top-layer'>
        <img className='icon' src={Store}
          onClick={() => history.push('/')} />
        <img className='icon'
          src={Hamburger}
          onClick={() => toggleSideMenu(!sideMenuIsVisible)}
        />
        {categories()}
      </section>
      <section className='nav-bottom-layer'>
        <div id='search' onClick={(e) => handleMenuItemToggle(e)}>
          <img src={Search} className='icon' />
          <SearchContainer hidden={choosenIcon != 'search'} />
        </div>
        <div id='user' onClick={(e) => handleMenuItemToggle(e)} className='user-info'>
          <img src={User} className='icon' />
          {currentUser.id ? loggedInUser() : guestUser()}
        </div>
        <div id='cart' onClick={(e) => handleMenuItemToggle(e)}>
          <img src={Cart} className='icon' onClick={() => history.push('/cart')} />
          <CartPreviewContainer hidden={choosenIcon != 'cart'} />
        </div>
      </section>
    </div>
  )
}

export default Greeting;

// Thinking about making a separate component for the bottom half of the nav bar.
// I need to be able to toggle between icons and auto switch to none when the user
// clicks off.