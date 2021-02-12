import * as types from '../constants/action_types'

const CartReducer = (store={}, action) => {
  switch (action.type) {
    case (types.ADD_TO_CART):
      return Object.assign({}, store, {[action.item.tcin]: action.item})
    case (types.REMOVE_FROM_CART):
      const newState = Object.assign({}, store)
      delete newState[action.itemId]
      return newState;
    default: 
      return store
  }
}

export default CartReducer