import React from 'react'
import {Link} from 'react-router-dom'
import CartPreviewContainer from '../cart/cart_preview_container'
import '../../../stylesheets/header-container.scss'
import Cart from '../../../images/store-cart.png'
import User from '../../../images/store-user.png'
import Store from '../../../images/store-store.png'
import SearchContainer from '../search/search_container'

const Greeting = ({currentUser, logout, saveUserCart}) => {
  const loggedInUser = () => 
    <h1 className='user-options'>Welcome {currentUser.username}
      <button onClick={() => logout()}>Logout</button>          
    </h1>

  const guestUser = () =>
    <div className='user-options'>
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
            <Link to='/'><img src={Store}/></Link> 
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
              <img src={User}/>
              {currentUser.id ? loggedInUser() : guestUser()}
            </div>
            <CartPreviewContainer/>
          </section>
          
        </section>
      </div>
    )
}

export default Greeting;