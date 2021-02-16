import React from 'react'
import {Link} from 'react-router-dom'
import CartPreviewContainer from '../cart/cart_preview_container'

const Greeting = ({currentUser, logout, saveUserCart}) => {
  if (currentUser.username !== undefined){
    return (
      <div className='greeting-container'>
        <Link className='icon' to='/'>BugTracker</Link>
        <h1>Welcome {currentUser.username}
          <button onClick={() => logout()}>Logout</button>          
        </h1>
      </div>
    )
  } else {
    return (
      <div className='greeting-container'>
        <Link className='icon' to='/'>BugTracker</Link>
      <div>
        <Link to='/signup'>
        <button>Sign up</button>
        </Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  )}
}

export default Greeting;