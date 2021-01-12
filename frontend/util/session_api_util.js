export const signup = (user) => 
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: user
  })

export const signin = (user) => 
  $.ajax({
    type: 'POST',
    url: '/api/sessions',
    data: user
  })

export const signout = () => 
  $.ajax({
    type: 'DELETE',
    url: '/api/sessions'
  })