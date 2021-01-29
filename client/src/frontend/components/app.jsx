import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom'
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>
      <Route path='/signup' component={SignupFormContainer} />
      <Route path='/login' component={LoginFormContainer} />
    </div>
  )
}

export default App