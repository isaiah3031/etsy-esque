export const signup = (user) => 
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: user
  })

export const login = (user) => 
  $.ajax({
    type: 'POST',
    url: '/api/sessions',
    data: user
  })

export const logout = () => 
  $.ajax({
    type: 'DELETE',
    url: '/api/sessions'
  })