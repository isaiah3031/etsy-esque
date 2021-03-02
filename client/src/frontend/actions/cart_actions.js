import * as types from '../constants/action_types'
import * as CartAPIUtil from '../util/cart_api_util'

const addToCartAction = item => ({
  type: types.ADD_TO_CART,
  item
})

const removeFromCartAction = itemId => ({
  type: types.REMOVE_FROM_CART,
  itemId
})

const receiveCartAction = (cart) => ({
  type: types.RECEIVE_CART,
  cart
}) 

const saveCartAction = cart => ({
  type: types.SAVE_TO_CART,
  cart
})

export const addToCart = item => dispatch => {
  return dispatch(addToCartAction(item))
}
export const removeFromCart = itemId => dispatch =>
  dispatch(removeFromCartAction(itemId))

export const saveCart = (userId, existingCart) => dispatch => {
  return CartAPIUtil.saveUserCart(userId, (existingCart)).then(cart => {
    let newCart = {}
    cart.contents.forEach(item => newCart[item] = newCart[item] ? newCart[item] += 1 : 1)
    if (Object.keys(existingCart).length == 0) newCart = {}
    return dispatch(saveCartAction(newCart))
  })
}


export const receiveCart = (userId, existingCart) => dispatch => 
  // Fetch a users previously saved cart from the rails database
  // **Cart is received as { cart: { ordered: false, contents: ['TCIN1','TCIN2'], ownerId: X } }
  CartAPIUtil.fetchUserCart(userId).then(cart => {
    // Iterate through cart contents. If the current TCIN is missing from the keys
    // of the existing cart object, add it with the child value "unloaded"
    existingCart = [...Object.values(existingCart), ...cart.contents]
    const formattedCart = {}
    existingCart.forEach(item => formattedCart[item] = formattedCart[item] ? formattedCart[item] += 1 : 1)
    dispatch(receiveCartAction(formattedCart))
  })


// handleexistingCart aka merge existing cart into previously saved user cart
// Take userId and cart as params
// Load cart from rails server
// Check if user cart has similarities to existing cart
    //    IF SO skip similarities and add the missing items to the state
//    IN THE CORRECT FORMAT: {{2341234: ITEM}, {2341341: ITEM}}
//    ALSO add the missing items TCINS to the users saved cart