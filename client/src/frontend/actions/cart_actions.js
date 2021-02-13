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
  debugger
  return CartAPIUtil.saveUserCart(userId, cart).then(cart => dispatch(saveCartAction(cart)))
}
export const receiveCart = (userId, unsavedCart) => dispatch => {
  CartAPIUtil.fetchUserCart(userId).then(cart => {
    cart = [...Object.values(unsavedCart), ...cart.contents]
    return dispatch(receiveCartAction(cart))
  }).then(action => {
    debugger
    return saveCart(userId, action.cart)()
  })
}