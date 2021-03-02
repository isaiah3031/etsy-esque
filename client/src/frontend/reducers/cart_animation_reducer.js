import * as types from '../constants/action_types'

const CartAnimationReducer = (store = {}, action) => {
  switch (action.type) {
    case (types.ADD_TO_CART):
    case (types.REMOVE_FROM_CART):
      return action.type
    default:
      return false
  }
}

export default CartAnimationReducer