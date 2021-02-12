import * as types from '../constants/action_types'

const addToCartAction = item => ({
  type: types.ADD_TO_CART,
  item
})

const removeFromCartAction = itemId => ({
  type: types.REMOVE_FROM_CART,
  itemId
})

export const addToCart = item => dispatch => 
  dispatch(addToCartAction(item))

export const removeFromCart = itemId => dispatch =>
  dispatch(removeFromCartAction(itemId))