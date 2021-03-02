import $ from "jquery"

export const signup = (user) => 
  $.ajax({
    type: 'POST',
    url: 'https://estore-iw-backend.herokuapp.com/api/users',
    data: user
  })

export const login = (user) => 
  $.ajax({
    type: 'POST',
    url: 'https://estore-iw-backend.herokuapp.com/api/sessions',
    data: user
  })

export const logout = () => 
  $.ajax({
    type: 'DELETE',
    url: 'https://estore-iw-backend.herokuapp.com/api/sessions'
  })