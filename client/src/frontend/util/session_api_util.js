import $ from "jquery"

export const signup = (user) => 
  $.ajax({
    type: 'POST',
    url: 'https://thawing-falls-95338.herokuapp.com/api/users',
    data: user
  })

export const login = (user) => 
  $.ajax({
    type: 'POST',
    url: 'https://thawing-falls-95338.herokuapp.com/api/sessions',
    data: user
  })

export const logout = () => 
  $.ajax({
    type: 'DELETE',
    url: 'https://thawing-falls-95338.herokuapp.com/api/sessions'
  })