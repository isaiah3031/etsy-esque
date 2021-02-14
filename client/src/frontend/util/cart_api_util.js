import $ from 'jquery'

export const fetchUserCart = (userId) => 
  $.ajax({
    type: 'GET',
    url: `http://localhost:3001/api/users/${userId}/carts/1`
  })

export const saveUserCart = (userId, cart) =>{
  return $.ajax({
    type: 'PUT',
    url: `http://localhost:3001/api/users/${userId}/carts/1`,
    data: {cart: {ordered: false, owner_id: userId, contents: cart}}
  })
}