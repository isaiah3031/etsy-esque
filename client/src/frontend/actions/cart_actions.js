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

export const addToCart = item => dispatch => 
  dispatch(addToCartAction(item))

export const removeFromCart = itemId => dispatch =>
  dispatch(removeFromCartAction(itemId))

export const saveCart = (userId, cart) => dispatch =>{
  
  return CartAPIUtil.saveUserCart(userId, cart).then(cart => dispatch(saveCartAction(cart)))
}

export const receiveCart = (userId, unsavedCart) => dispatch => {
  return CartAPIUtil.fetchUserCart(userId).then(cart => {
    // Check if unsaved(STATE) cart has any items that are missing from the saved(RAILS) cart
    // if so, adds the item the the saved cart 
    let usersCart = [...cart.contents]
    Object.keys(unsavedCart).forEach(tcin => {
      if (!usersCart.includes(tcin)) {
        usersCart.push(tcin)
      }
    })
    
    // Check if saved(RAILS) cart has any items that are missing from the unsaved(STATE) cart
    // if so, adds tcin as key with undefined items
    usersCart.forEach(tcin => {
      if (!Object.keys(unsavedCart).includes(tcin)) {
        unsavedCart[tcin] = undefined
      }
    })
    debugger
    return dispatch(receiveCartAction(unsavedCart))
  }).then(action => {
    return saveCart(userId, Object.keys(action.cart))()
  })
}

// handleexistingCart aka merge existing cart into previously saved user cart
// Take userId and cart as params
// Load cart from rails server
// Check if user cart has similarities to existing cart
    //    IF SO skip similarities and add the missing items to the state
//    IN THE CORRECT FORMAT: {{2341234: ITEM}, {2341341: ITEM}}
//    ALSO add the missing items TCINS to the users saved cart