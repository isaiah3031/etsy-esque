import $ from 'jquery'

export const fetchUserCart = (userId) => 
  $.ajax({
    type: 'GET',
    url: `https://thawing-falls-95338.herokuapp.com/api/users/${userId}/carts/1`
  })

export const saveUserCart = (userId, cart) =>
  $.ajax({
    type: 'PUT',
    url: `https://thawing-falls-95338.herokuapp.com/api/users/${userId}/carts/1`,
    data: {cart: {ordered: false, owner_id: userId, contents: cart}}
  })
