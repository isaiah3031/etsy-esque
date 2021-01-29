import $ from "jquery"

window.$ = $
window.jQuery = $

export const signup = (user) => 
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3001/api/users',
    data: user
  })

export const login = (user) => 
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3001/api/sessions',
    data: user
  })

export const logout = () => 
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3001/api/sessions'
  })