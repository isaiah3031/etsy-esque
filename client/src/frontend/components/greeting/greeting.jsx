import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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

  const loggedInUser = (isMobile = false) => {
    if (choosenIcon != 'user' && !isMobile) return null
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

  const guestUser = (isMobile = false) => {
    if (choosenIcon != 'user' && !isMobile) return null

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

  const smallScreenBottomNav = () => <>
    <div id='search' onClick={(e) => handleMenuItemToggle(e)}>
      <img src={Search} className='search-icon' />
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
  </>

  const midLargeScreenBottomNav = () => <>
    <div id='search'>
      <SearchContainer />
    </div>
    <div id='user' className='user-info bottom-nav-right-sec'>
      {currentUser.id ? loggedInUser(isMobile) : guestUser(isMobile)}
      <img src={Cart} className='icon' onClick={() => history.push('/cart')} />
      <CartPreviewContainer hidden={choosenIcon != 'cart'} />
    </div>
  </>

  const handleMenuItemToggle = (e) => {
    let newSelection = e.target.parentElement.id
    if (newSelection == choosenIcon) newSelection = 'none'
    setIcon(newSelection)
  }

  const isMobile = useMediaQuery('(min-width:600px)')
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
        {isMobile ? midLargeScreenBottomNav() : smallScreenBottomNav()}
      </section>
    </div>
  )
}

export default Greeting;
