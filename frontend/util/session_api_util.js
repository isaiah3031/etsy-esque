export const signup = (user) => 
  $.ajax({
    type: 'POST',
    url: '/auth',
    data: user
  })

export const signin = (user) => 
  $.ajax({
    type: 'POST',
    url: '/auth/sign_in',
    data: user
  })

export const signout = () => 
  $.ajax({
    type: 'DELETE',
    url: '/auth/sign_out'
  })