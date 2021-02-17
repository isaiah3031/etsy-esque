import * as types from '../constants/action_types'

const CartReducer = (store={}, action) => {
  switch (action.type) {
    case (types.ADD_TO_CART):
      return Object.assign({}, store, {[action.item]: 1})
    case (types.REMOVE_FROM_CART):
      let newState = Object.assign({}, store)
      Object.keys(newState).length <= 1 ? newState = [] : delete newState[action.itemId]
      return newState;
    case (types.RECEIVE_CART):
      return Object.assign({}, store, action.cart)
    case (types.SAVE_TO_CART):
      return Object.assign({}, store, action.cart)
    default: 
      return store
  }
}

export default CartReducer