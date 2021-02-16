import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import HomepageContainer from './homepage_container'
import ProductDisplayContainer from '../components/products/product_display_container'
import CartPreviewContainer from '../components/cart/cart_preview_container'

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
        <CartPreviewContainer />
      </header>
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/login' component={LoginFormContainer} />
      <Switch>
        <Route exact path='/' component={HomepageContainer}/>
        <Route exact path='/product/:product_id' component={ProductDisplayContainer} />
      </Switch>

    </div>
  )
}

export default App