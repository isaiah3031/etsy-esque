import $ from 'jquery'

export const fetchUserCart = (userId) => 
  $.ajax({
    type: 'GET',
    url: `http://localhost:3001/api/users/${userId}/carts/1`
  })

export const saveUserCart = (userId, cart) =>{
  debugger
  // This is the wrong way to do this.
  // I think I'm going to need to store all the info I need about an item.
  cart = cart.map(item => item.tcin) 
  return $.ajax({
    type: 'PUT',
    url: `http://localhost:3001/api/users/${userId}/carts/1`,
    data: {cart: {ordered: false, owner_id: userId, contents: Object.values(cart)}}
  })
}