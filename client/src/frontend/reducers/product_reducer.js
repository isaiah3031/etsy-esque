import {RECEIVE_PRODUCT, RECEIVE_PRODUCTS} from '../constants/action_types'

const ProductReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.products)
    default: 
      return state;
  }
}

export default ProductReducer