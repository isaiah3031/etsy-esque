import React from 'react'
import {Link} from 'react-router-dom'
import CartPreviewContainer from '../cart/cart_preview_container'
import '../../../stylesheets/header-container.scss'

const Greeting = ({currentUser, logout, saveUserCart}) => {
  const loggedInUser = () => 
    <h1>Welcome {currentUser.username}
      <button onClick={() => logout()}>Logout</button>          
    </h1>

  const guestUser = () =>
    <div>
      <Link to='/signup'>
        <button>Sign up</button>
      </Link>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>

  const categories = () =>
    <ul>
      <li>Clothes</li>
      <li>Furniture</li>
      <li>Electronics</li>
      <li>Plants</li>
    </ul>

    return (
      <div className='header-container'>
        <section className='header-1'>
          <div className='home'>
            <Link className='icon' to='/'>BugTracker</Link> 
          </div>
          <div>
            <label id='search-bar'>SEARCH</label>
          </div>
        </section>
        <section className='header-2'>
          <div>
            {categories()}
          </div>
          {currentUser.id ? loggedInUser() : guestUser()}
        </section>
      </div>
    )
}

export default Greeting;