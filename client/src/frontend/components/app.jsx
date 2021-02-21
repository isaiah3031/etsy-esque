import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import HomepageContainer from './homepage_container'
import ProductDisplayContainer from '../components/products/product_display_container'
import SearchResultsContainer from '../components/search/search_results_container'
import CartDetailContainer from '../components/cart/cart_detail_container'

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/login' component={LoginFormContainer} />
      <Switch>
        <Route exact path='/search/:search_terms' component={SearchResultsContainer} />
        <Route exact path='/product/:product_id' component={ProductDisplayContainer} />
        <Route exact path='/cart' components={CartDetailContainer} />
        <Route exact path='/' component={HomepageContainer}/>
      </Switch>

    </div>
  )
}

export default App